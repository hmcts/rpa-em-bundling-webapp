import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmViewerComponent} from './em-viewer.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {DebugElement, SimpleChange} from '@angular/core';
import {EmViewerModule} from './em-viewer.module';

const originalUrl = 'http://api-gateway.dm.com/documents/1234-1234-1234';
const url = '/demproxy/dm/documents/1234-1234-1234';

describe('EmViewerComponent', () => {
  let component: EmViewerComponent;
  let httpMock: HttpTestingController;
  let fixture: ComponentFixture<EmViewerComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    const testingModule = TestBed.configureTestingModule({
      imports: [EmViewerModule, HttpClientTestingModule]
    });

    testingModule.compileComponents();
  }));

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(EmViewerComponent);
    component = fixture.componentInstance;
    component.url = originalUrl;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('when the mime type is an image', () => {
    beforeEach(() => {
      const req = httpMock.expectOne(url);
      req.flush({
        mimeType: 'image/jpeg',
        originalDocumentName: 'image.jpeg',
        _links: {
          binary: {
            href: `${originalUrl}/binary`
          },
          self: {
            href: `${originalUrl}`
          }
        }
      });
      fixture.detectChanges();
    });

    it('should display document name', () => {
      expect(element.nativeElement.querySelector('h1').textContent).toEqual('image.jpeg');
    });

    it('img element should be visible', () => {
      expect(element.nativeElement.querySelector('app-img-viewer')).toBeTruthy();
    });

    it('and pdf element should not be visible', () => {
      expect(element.nativeElement.querySelector('app-pdf-viewer')).not.toBeTruthy();
    });

    describe('when the url is changed', () => {

      const newUrl = 'http://api-gateway.dm.com/documents/5678-5678-5678';
      const fixedNewUrl = '/demproxy/dm/documents/5678-5678-5678';

      beforeEach(() => {
        component.url = newUrl;
        component.ngOnChanges({url: new SimpleChange(originalUrl, newUrl, false)});
        fixture.detectChanges();
      });

      beforeEach(() => {
        const req = httpMock.expectOne(fixedNewUrl);
        req.flush({
          mimeType: 'image/jpeg',
          originalDocumentName: 'new-image.jpeg',
          _links: {
            binary: {
              href: `${newUrl}/binary`
            },
            self: {
              href: `${newUrl}`
            }
          }
        });
        fixture.detectChanges();
      });

      it('should display the new document name', () => {
        expect(element.nativeElement.querySelector('h1').textContent).toEqual('new-image.jpeg');
      });

      it('img element should still be visible', () => {
        expect(element.nativeElement.querySelector('app-img-viewer')).toBeTruthy();
      });

      it('and pdf element should still not be visible', () => {
        expect(element.nativeElement.querySelector('app-pdf-viewer')).not.toBeTruthy();
      });
    });

    describe('when the page is changed', () => {

      beforeEach(() => {
        component.page = 2;
        component.ngOnChanges({page: new SimpleChange(1, component.page, false)});
        fixture.detectChanges();
      });

      it('should update the page', () => {
        expect(component.viewerComponent.page).toEqual(2);
      });
    });
  });

  describe('when the mime type is pdf', () => {
    beforeEach(() => {
      const req = httpMock.expectOne(url);
      req.flush({
        mimeType: 'application/pdf',
        originalDocumentName: 'cert.pdf',
        _links: {
          binary: {
            href: `${originalUrl}/binary`
          },
          self: {
            href: `${originalUrl}`
          }
        }
      });
      fixture.detectChanges();
    });

    it('should display document name', () => {
      expect(element.nativeElement.querySelector('h1').textContent).toEqual('cert.pdf');
    });

    it('img element should not be visible', () => {
      expect(element.nativeElement.querySelector('app-img-viewer')).not.toBeTruthy();
    });

    it('pdf element should be visible', () => {
      expect(element.nativeElement.querySelector('app-pdf-viewer')).toBeTruthy();
    });
  });

  describe('when annotate is true and the mime type is pdf', () => {
    beforeEach(() => {
      component = fixture.componentInstance;
      component.url = originalUrl;
      element = fixture.debugElement;
      fixture.detectChanges();
      component.annotate = true;
      fixture.detectChanges();
    });

    beforeEach(() => {
      const req = httpMock.expectOne(url);
      req.flush({
        mimeType: 'application/pdf',
        originalDocumentName: 'cert.pdf',
        _links: {
          binary: {
            href: `${originalUrl}/binary`
          },
          self: {
            href: `${originalUrl}`
          }
        }
      });
      fixture.detectChanges();
    });

    it('should display document name', () => {
      expect(element.nativeElement.querySelector('h1').textContent).toEqual('cert.pdf');
    });

    it('img element should not be visible', () => {
      expect(element.nativeElement.querySelector('app-img-viewer')).not.toBeTruthy();
    });

    it('annotated pdf element should be visible', () => {
      expect(element.nativeElement.querySelector('app-annotated-pdf-viewer')).toBeTruthy();
    });
  });

  describe('when the mime type is unsupported', () => {
    beforeEach(() => {
      const req = httpMock.expectOne(url);
      req.flush({
        mimeType: 'text/plain',
        originalDocumentName: 'plain.txt',
        _links: {
          binary: {
            href: `${originalUrl}/binary`
          },
          self: {
            href: `${originalUrl}`
          }
        }
      });
      fixture.detectChanges();
    });

    it('should display document name', () => {
      expect(element.nativeElement.querySelector('h1').textContent).toEqual('plain.txt');
    });

    it('should show a message with link to download', () => {
      expect(element.nativeElement.querySelector('p').innerHTML)
        .toContain(`${url}/binary`);
    });

    it('img element should not be visible', () => {
      expect(element.nativeElement.querySelector('app-img-viewer')).not.toBeTruthy();
    });

    it('pdf element should not be visible', () => {
      expect(element.nativeElement.querySelector('app-pdf-viewer')).not.toBeTruthy();
    });
  });

  describe('when the server returns an error', () => {
    beforeEach(() => {
      const req = httpMock.expectOne(url);
      const mockErrorResponse = {
        status: 404, statusText: 'Not Found'
      };
      const data = 'Invalid request parameters';
      req.flush(data, mockErrorResponse);
      fixture.detectChanges();
    });

    it('should display an error with the status', () => {
      expect(element.nativeElement.querySelector('.error-summary').textContent).toContain('404');
    });

    it('img element should not be visible', () => {
      expect(element.nativeElement.querySelector('app-img-viewer')).not.toBeTruthy();
    });

    it('pdf element should not be visible', () => {
      expect(element.nativeElement.querySelector('app-pdf-viewer')).not.toBeTruthy();
    });

  });

});
