import React from 'react';
import request from 'supertest';
import * as reactDomServer from 'react-dom/server';
import * as styledComponents from 'styled-components';
import dotenv from 'dotenv';
import getRouteProps from '../app/routes/getInitialData/utils/getRouteProps';
import Document from './Document/component';
import routes from '../app/routes';
import { localBaseUrl } from '../testHelpers/config';
import * as renderDocument from './Document';

// mimic the logic in `src/index.js` which imports the `server/index.jsx`
dotenv.config({ path: './envConfig/local.env' });

const path = require('path');
const express = require('express');
const server = require('./index').default;

const sendFileSpy = jest.spyOn(express.response, 'sendFile');

const validateHttpHeader = (headers, headerKey, expectedHeaderValue) => {
  const headerKeys = Object.keys(headers);
  const headerValues = Object.values(headers);
  const indexOfXFrame = headerKeys.indexOf(headerKey);

  expect(headerKeys).toContain(headerKey);
  expect(headerValues[indexOfXFrame]).toEqual(expectedHeaderValue);
};

jest.mock('react-dom/server', () => ({
  renderToString: jest.fn().mockImplementation(() => '<h1>Mock app</h1>'),
  renderToStaticMarkup: jest
    .fn()
    .mockImplementation(() => '<html><body><h1>Mock app</h1></body></html>'),
}));

jest.mock('react-helmet', () => ({
  Helmet: {
    renderStatic: jest.fn().mockReturnValue({ head: 'tags' }),
  },
}));

jest.mock('../app/routes/getInitialData/utils/getRouteProps');

const mockRouteProps = ({
  id,
  service,
  isAmp,
  dataResponse,
  responseType,
  variant,
}) => {
  const getInitialData =
    responseType === 'reject'
      ? jest.fn().mockRejectedValueOnce(dataResponse)
      : jest.fn().mockResolvedValueOnce(dataResponse);

  // Add a leading slash to match what is received from the application routing regex.
  const mockVariantParam = variant ? `/${variant}` : undefined;

  getRouteProps.mockReturnValue({
    isAmp,
    service,
    variant,
    route: { getInitialData },
    match: {
      params: { id, service, variant: mockVariantParam },
    },
  });
};

styledComponents.ServerStyleSheet = jest.fn().mockImplementation(() => ({
  collectStyles: jest.fn().mockReturnValue(<h1>Mock app</h1>),
  getStyleElement: jest.fn().mockReturnValue(<style />),
}));

jest.mock('./styles', () => ({
  getStyleTag: jest.fn().mockImplementation(() => <style />),
}));

const renderDocumentSpy = jest.spyOn(renderDocument, 'default');

const makeRequest = async requestPath => request(server).get(requestPath);

const testFrontPages = ({ platform, service, variant }) => {
  const isAmp = platform === 'amp';
  const extension = isAmp ? '.amp' : '';
  const serviceURL = `/${service}${variant ? `/${variant}` : ''}${extension}`;

  describe(`/{service}${extension}`, () => {
    const successDataResponse = {
      isAmp,
      data: { some: 'data' },
      service: 'someService',
      status: 200,
      variant,
    };

    const notFoundDataResponse = {
      isAmp,
      data: { some: 'data' },
      service: 'someService',
      status: 404,
      variant,
    };

    describe('Successful render', () => {
      describe('200 status code', () => {
        beforeEach(() => {
          mockRouteProps({
            service,
            isAmp,
            dataResponse: successDataResponse,
            variant,
          });
        });

        it('should respond with rendered data', async () => {
          const { text, status } = await makeRequest(serviceURL);

          expect(status).toBe(200);

          expect(reactDomServer.renderToString).toHaveBeenCalledWith(
            <h1>Mock app</h1>,
          );

          expect(reactDomServer.renderToStaticMarkup).toHaveBeenCalledWith(
            <Document
              app="<h1>Mock app</h1>"
              assets={[
                `${localBaseUrl}/static/js/${service}-12345.12345.js`,
                `${localBaseUrl}/static/js/vendor-54321.12345.js`,
                `${localBaseUrl}/static/js/vendor-12345.12345.js`,
                `${localBaseUrl}/static/js/main-12345.12345.js`,
              ]}
              assetOrigins={[
                'https://ichef.bbci.co.uk',
                'https://gel.files.bbci.co.uk',
                localBaseUrl,
                'https://logws1363.ati-host.net?',
              ]}
              data={successDataResponse}
              helmet={{ head: 'tags' }}
              isAmp={isAmp}
              service={service}
              styleTags={<style />}
            />,
          );

          expect(renderDocumentSpy).toHaveBeenCalledWith({
            bbcOrigin: undefined,
            data: successDataResponse,
            isAmp,
            service,
            routes,
            url: serviceURL,
            variant,
          });

          expect(text).toEqual(
            '<!doctype html><html><body><h1>Mock app</h1></body></html>',
          );
        });
      });

      describe('404 status code', () => {
        beforeEach(() => {
          mockRouteProps({
            service,
            isAmp,
            dataResponse: notFoundDataResponse,
            variant,
          });
        });

        it('should respond with a rendered 404', async () => {
          const { status, text } = await makeRequest(serviceURL);
          expect(status).toBe(404);
          expect(text).toEqual(
            '<!doctype html><html><body><h1>Mock app</h1></body></html>',
          );
        });
      });
    });

    describe('Unknown error within the data fetch, react router or its dependencies', () => {
      beforeEach(() => {
        mockRouteProps({
          service,
          isAmp,
          dataResponse: Error('Error!'),
          responseType: 'reject',
          variant,
        });
      });

      it('should respond with a 500', async () => {
        const { status, text } = await makeRequest(serviceURL);
        expect(status).toEqual(500);
        expect(text).toEqual('Error!');
      });
    });
  });
};

const testArticles = ({ platform, service, variant }) => {
  const isAmp = platform === 'amp';
  const extension = isAmp ? '.amp' : '';

  describe(`/{service}/articles/{optimoID}${extension}`, () => {
    const successDataResponse = {
      isAmp,
      data: { some: 'data' },
      service: 'someService',
      status: 200,
    };

    const notFoundDataResponse = {
      isAmp,
      data: { some: 'data' },
      service: 'someService',
      status: 404,
    };

    const id = `c0000000001o`;
    const articleURL = `/${service}/articles/${id}${extension}`;

    describe('Successful render', () => {
      describe('200 status code', () => {
        beforeEach(() => {
          mockRouteProps({
            id,
            service,
            isAmp,
            dataResponse: successDataResponse,
            variant,
          });
        });

        it('should respond with rendered data', async () => {
          const { text, status } = await makeRequest(articleURL);

          expect(status).toBe(200);

          expect(reactDomServer.renderToString).toHaveBeenCalledWith(
            <h1>Mock app</h1>,
          );

          expect(reactDomServer.renderToStaticMarkup).toHaveBeenCalledWith(
            <Document
              app="<h1>Mock app</h1>"
              assets={[
                `${localBaseUrl}/static/js/${service}-12345.12345.js`,
                `${localBaseUrl}/static/js/vendor-54321.12345.js`,
                `${localBaseUrl}/static/js/vendor-12345.12345.js`,
                `${localBaseUrl}/static/js/main-12345.12345.js`,
              ]}
              assetOrigins={[
                'https://ichef.bbci.co.uk',
                'https://gel.files.bbci.co.uk',
                localBaseUrl,
                'https://logws1363.ati-host.net?',
              ]}
              data={successDataResponse}
              helmet={{ head: 'tags' }}
              isAmp={isAmp}
              service={service}
              styleTags={<style />}
            />,
          );

          expect(renderDocumentSpy).toHaveBeenCalledWith({
            bbcOrigin: undefined,
            data: successDataResponse,
            isAmp,
            service,
            routes,
            url: articleURL,
            variant,
          });

          expect(text).toEqual(
            '<!doctype html><html><body><h1>Mock app</h1></body></html>',
          );
        });
      });

      describe('404 status code', () => {
        beforeEach(() => {
          mockRouteProps({
            id,
            service,
            isAmp,
            dataResponse: notFoundDataResponse,
            variant,
          });
        });

        it('should respond with a rendered 404', async () => {
          const { status, text } = await makeRequest(articleURL);
          expect(status).toBe(404);
          expect(text).toEqual(
            '<!doctype html><html><body><h1>Mock app</h1></body></html>',
          );
        });
      });
    });

    describe('Unknown error within the data fetch, react router or its dependencies', () => {
      beforeEach(() => {
        mockRouteProps({
          id,
          service,
          isAmp,
          dataResponse: Error('Error!'),
          responseType: 'reject',
          variant,
        });
      });

      it('should respond with a 500', async () => {
        const { status, text } = await makeRequest(articleURL);
        expect(status).toEqual(500);
        expect(text).toEqual('Error!');
      });
    });
  });
};

const testMediaPages = ({ platform, service, serviceId, mediaId }) => {
  describe(`${platform} media page - live radio`, () => {
    const isAmp = platform === 'amp';
    const successDataResponse = {
      isAmp,
      data: { some: 'data' },
      service: 'someService',
      status: 200,
    };

    const notFoundDataResponse = {
      isAmp,
      data: { some: 'data' },
      service: 'someService',
      status: 404,
    };

    const extension = isAmp ? '.amp' : '';
    const mediaPageURL = `/${service}/${serviceId}/${mediaId}${extension}`;

    describe('Successful render', () => {
      describe('200 status code', () => {
        beforeEach(() => {
          mockRouteProps({
            service,
            isAmp,
            dataResponse: successDataResponse,
          });
        });

        it('should respond with rendered data', async () => {
          const { text, status } = await makeRequest(mediaPageURL);

          expect(status).toBe(200);

          expect(reactDomServer.renderToString).toHaveBeenCalledWith(
            <h1>Mock app</h1>,
          );

          expect(reactDomServer.renderToStaticMarkup).toHaveBeenCalledWith(
            <Document
              app="<h1>Mock app</h1>"
              assets={[
                `${localBaseUrl}/static/js/korean-12345.12345.js`,
                `${localBaseUrl}/static/js/vendor-54321.12345.js`,
                `${localBaseUrl}/static/js/vendor-12345.12345.js`,
                `${localBaseUrl}/static/js/main-12345.12345.js`,
              ]}
              assetOrigins={[
                'https://ichef.bbci.co.uk',
                'https://gel.files.bbci.co.uk',
                localBaseUrl,
                'https://logws1363.ati-host.net?',
              ]}
              data={successDataResponse}
              helmet={{ head: 'tags' }}
              isAmp={isAmp}
              service={service}
              styleTags={<style />}
            />,
          );

          expect(renderDocumentSpy).toHaveBeenCalledWith({
            bbcOrigin: undefined,
            data: successDataResponse,
            isAmp,
            service,
            routes,
            url: mediaPageURL,
          });

          expect(text).toEqual(
            '<!doctype html><html><body><h1>Mock app</h1></body></html>',
          );
        });
      });
    });

    describe('404 status code', () => {
      beforeEach(() => {
        mockRouteProps({
          service,
          isAmp,
          dataResponse: notFoundDataResponse,
        });
      });

      it('should respond with a rendered 404', async () => {
        const { status, text } = await makeRequest(`/${service}`);
        expect(status).toBe(404);
        expect(text).toEqual(
          '<!doctype html><html><body><h1>Mock app</h1></body></html>',
        );
      });
    });

    describe('Unknown error within the data fetch, react router or its dependencies', () => {
      beforeEach(() => {
        mockRouteProps({
          service,
          isAmp,
          dataResponse: Error('Error!'),
          responseType: 'reject',
        });
      });

      it('should respond with a 500', async () => {
        const { status, text } = await makeRequest(mediaPageURL);
        expect(status).toEqual(500);
        expect(text).toEqual('Error!');
      });
    });
  });
};

describe('Server', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('/status', () => {
    it('should respond with a 200', async () => {
      const { statusCode } = await makeRequest('/status');
      expect(statusCode).toBe(200);
    });
  });

  describe('Service workers', () => {
    it('should serve a file for existing service workers', async () => {
      await makeRequest('/news/articles/sw.js');
      expect(sendFileSpy.mock.calls[0][0]).toEqual(
        path.join(__dirname, '/public/sw.js'),
      );
    });

    it('should not serve a file for non-existing service workers', async () => {
      const { statusCode } = await makeRequest('/some-service/articles/sw.js');
      expect(sendFileSpy.mock.calls.length).toEqual(0);
      expect(statusCode).toEqual(500);
    });
  });

  describe('Manifest json', () => {
    it('should serve a file for valid service paths', async () => {
      await makeRequest('/news/articles/manifest.json');
      expect(sendFileSpy.mock.calls[0][0]).toEqual(
        path.join(__dirname, '/public/news/manifest.json'),
      );
    });

    it('should not serve a manifest file for non-existing services', async () => {
      const { statusCode } = await makeRequest('/some-service/manifest.json');
      expect(sendFileSpy.mock.calls.length).toEqual(0);
      expect(statusCode).toEqual(500);
    });
  });

  describe('Data', () => {
    describe('for articles', () => {
      it('should respond with JSON', async () => {
        const { body } = await makeRequest('/news/articles/c0g992jmmkko.json');
        expect(body).toEqual(
          expect.objectContaining({ content: expect.any(Object) }),
        );
      });

      describe('with non-existent data', () => {
        it('should respond with a 404', async () => {
          const { statusCode } = await makeRequest(
            '/news/articles/cERROR00025o.json',
          );
          expect(statusCode).toEqual(404);
        });
      });

      describe('Trailing slash redirects', () => {
        it('should respond with a 301', async () => {
          const { statusCode } = await makeRequest(
            '/news/articles/c6v11qzyv8po/',
          );
          expect(statusCode).toEqual(301);
        });
      });
    });

    describe('for front pages', () => {
      it('should respond with JSON', async () => {
        const { body } = await makeRequest('/igbo.json');
        expect(body).toEqual(
          expect.objectContaining({ content: expect.any(Object) }),
        );
      });

      describe('with non-existent data', () => {
        beforeEach(() => {
          const notFoundDataResponse = {
            isAmp: false,
            data: { some: 'data' },
            service: 'someService',
            status: 404,
          };

          mockRouteProps({
            service: 'someService',
            isAmp: false,
            dataResponse: notFoundDataResponse,
          });
        });

        it('should respond with a 404', async () => {
          const { statusCode } = await makeRequest('/ERROR.json');
          expect(statusCode).toEqual(404);
        });
      });
    });

    describe('for media page - live radio', () => {
      it('should respond with JSON', async () => {
        const { body } = await makeRequest(
          '/korean/bbc_korean_radio/liveradio.json',
        );
        expect(body).toEqual(
          expect.objectContaining({ content: expect.any(Object) }),
        );
      });

      describe('with non-existent data', () => {
        it('should respond with a 404', async () => {
          const { statusCode } = await makeRequest(
            '/korean/bbc_korean_radio/ERROR.json',
          );
          expect(statusCode).toEqual(404);
        });
      });
    });
    describe('for media asset pages', () => {
      it('should respond with JSON', async () => {
        const { body } = await makeRequest('/pidgin/tori-49450859.json');
        expect(body).toEqual(
          expect.objectContaining({ content: expect.any(Object) }),
        );
      });
      describe('with non-existent data', () => {
        it('should respond with a 404', async () => {
          const { statusCode } = await makeRequest(
            '/pidgin/tori-00000000.json',
          );
          expect(statusCode).toEqual(404);
        });
      });
    });
  });

  testFrontPages({ platform: 'canonical', service: 'igbo' });
  testFrontPages({ platform: 'amp', service: 'igbo' });
  testFrontPages({
    platform: 'canonical',
    service: 'ukchina',
    variant: 'simp',
  });
  testFrontPages({ platform: 'amp', service: 'serbian', variant: 'lat' });

  testArticles({ platform: 'amp', service: 'news' });
  testArticles({ platform: 'canonical', service: 'news' });
  testArticles({ platform: 'amp', service: 'zhongwen', variant: 'trad' });
  testArticles({ platform: 'canonical', service: 'zhongwen', variant: 'simp' });

  testMediaPages({
    platform: 'amp',
    service: 'korean',
    serviceId: 'bbc_korean_radio',
    mediaId: 'liveradio',
  });
  testMediaPages({
    platform: 'canonical',
    service: 'korean',
    serviceId: 'bbc_korean_radio',
    mediaId: 'liveradio',
  });

  describe('Unknown routes', () => {
    const service = 'igbo';
    const isAmp = false;
    const dataResponse = {
      isAmp,
      data: { some: 'data' },
      service: 'news',
      status: 404,
    };

    describe('404 status code', () => {
      beforeEach(() => {
        mockRouteProps({
          service,
          isAmp,
          dataResponse,
        });
      });

      it('should respond with rendered data', async () => {
        const { text, status } = await makeRequest(`/${service}/foobar`);

        expect(status).toBe(404);

        expect(reactDomServer.renderToString).toHaveBeenCalledWith(
          <h1>Mock app</h1>,
        );

        expect(reactDomServer.renderToStaticMarkup).toHaveBeenCalledWith(
          <Document
            app="<h1>Mock app</h1>"
            assets={[
              `${localBaseUrl}/static/js/igbo-12345.12345.js`,
              `${localBaseUrl}/static/js/vendor-54321.12345.js`,
              `${localBaseUrl}/static/js/vendor-12345.12345.js`,
              `${localBaseUrl}/static/js/main-12345.12345.js`,
            ]}
            assetOrigins={[
              'https://ichef.bbci.co.uk',
              'https://gel.files.bbci.co.uk',
              localBaseUrl,
              'https://logws1363.ati-host.net?',
            ]}
            data={dataResponse}
            helmet={{ head: 'tags' }}
            isAmp={isAmp}
            service={service}
            styleTags={<style />}
          />,
        );

        expect(text).toEqual(
          '<!doctype html><html><body><h1>Mock app</h1></body></html>',
        );
      });
    });
  });
});

describe('Server HTTP Headers', () => {
  let statusRequest;

  beforeAll(async () => {
    statusRequest = await request(server).get('/status');
  });

  it(`should not contain 'x-powered-by'`, () => {
    const headerKeys = Object.keys(statusRequest.headers);
    expect(headerKeys).not.toContain('x-powered-by');
  });

  it(`should have 'x-frame-options' set to 'DENY'`, () => {
    validateHttpHeader(statusRequest.headers, 'x-frame-options', 'DENY');
  });

  it(`should have X-DNS-Prefetch-Control set to 'off' `, () => {
    validateHttpHeader(statusRequest.headers, 'x-dns-prefetch-control', 'off');
  });

  it(`should have Strict-Transport-Security set to 'max-age=15552000; includeSubDomains' `, () => {
    validateHttpHeader(
      statusRequest.headers,
      'strict-transport-security',
      'max-age=15552000; includeSubDomains',
    );
  });

  it(`should have X-Download-Options set to 'noopen' `, () => {
    validateHttpHeader(statusRequest.headers, 'x-download-options', 'noopen');
  });

  it(`should have X-Content-Type-Options set to 'nosniff' `, () => {
    validateHttpHeader(
      statusRequest.headers,
      'x-content-type-options',
      'nosniff',
    );
  });

  it(`should have X-XSS-Protection set to '1; mode=block' `, () => {
    validateHttpHeader(
      statusRequest.headers,
      'x-xss-protection',
      '1; mode=block',
    );
  });

  describe("should set 'x-clacks-overhead' header", () => {
    it('should send the message on', async () => {
      validateHttpHeader(
        statusRequest.headers,
        'x-clacks-overhead',
        'GNU Terry Pratchett',
      );
    });

    it('should not log the message', async () => {
      global.console.log = jest.fn();

      await makeRequest('/status');

      expect(global.console.log).not.toHaveBeenCalledWith(
        'GNU Terry Pratchett',
      );
    });

    // It should turn the message around at the end of the line and send it back again (Currently untested)
  });
});
