import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorSidebarComponent } from './text-editor-sidebar.component';

describe('TextEditorSidebarComponent', () => {
  let component: TextEditorSidebarComponent;
  let fixture: ComponentFixture<TextEditorSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextEditorSidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
