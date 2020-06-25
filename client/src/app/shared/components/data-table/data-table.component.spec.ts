import { DataTableComponent } from "./data-table.component"

// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { DataTableComponent } from './data-table.component';
// import { FormBuilder } from '@angular/forms';

// describe('DataTableComponent', () => {
//   let component: DataTableComponent;
//   let fixture: ComponentFixture<DataTableComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ DataTableComponent ],
//       providers: [FormBuilder]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DataTableComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe('data-table.spec', () => {
  let component: DataTableComponent;
  let mockFormBuilder, mockForm;

  beforeAll(() => {

    mockForm = {

    }

    mockFormBuilder = {
      group: () => {
        mockForm
      }
    }

    component = new DataTableComponent(mockFormBuilder)
  })

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  })
})