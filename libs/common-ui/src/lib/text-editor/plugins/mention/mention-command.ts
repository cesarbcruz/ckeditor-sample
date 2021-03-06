/* eslint-disable @typescript-eslint/no-explicit-any */
export class MentionCommand {
  private editor$
  constructor(editor:any){
    this.editor$ = editor
  }

  execute(param:any){
      const viewFragment = this.editor$.data.processor.toView( param.text );
      const modelFragment = this.editor$.data.toModel( viewFragment );
      this.editor$.model.insertContent( modelFragment, param.range);
      this.editor$.model.change( (writer:any) => {
        writer.setSelection( writer.createPositionAt( this.editor$.model.document.getRoot(), 'end' ) );
      } );
  }
}
