/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import DecoupledDocumentEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder.js';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import ExportPdf from '@ckeditor/ckeditor5-export-pdf/src/exportpdf.js';
import ExportWord from '@ckeditor/ckeditor5-export-word/src/exportword.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js';
import Pagination from '@ckeditor/ckeditor5-pagination/src/pagination.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import LineHeight from './plugins/line-height/lineheight';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';


class Editor extends DecoupledDocumentEditor { }


// Plugins to include in the build.
Editor.builtinPlugins = [
  RemoveFormat,
  Alignment,
  Autoformat,
  BlockQuote,
  Bold,
  CKFinder,
  CKFinderUploadAdapter,
  CloudServices,
  Essentials,
  ExportPdf,
  ExportWord,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  ListProperties,
  MediaEmbed,
  PageBreak,
  Pagination,
  Paragraph,
  PasteFromOffice,
  Strikethrough,
  Table,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  TextTransformation,
  TodoList,
  Underline,
  LineHeight,
  SpecialCharacters,
  SpecialCharactersEssentials,
  Base64UploadAdapter,
  FindAndReplace,
  Subscript,
  Superscript,
  Code,
  HorizontalLine,
  Mention
];

// Editor configuration.
Editor.defaultConfig = {
  fontSize: {
    options: [
      8,
      9,
      10,
      11,
      12,
      14,
      'default',
      16,
      18,
      20,
      22,
      24,
      26,
      28,
      36
    ]
  },
  lineHeight: {
    options: [0.5, 1, 1.5, 2, 2.5]
  },
  toolbar: {
    items: [
      'heading',
      '|',
      'fontSize',
      'fontFamily',
      '|',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'subscript',
      'superscript',
      'code',
      'removeFormat',
      '|',
      'lineHeight',
      '|',
      'alignment',
      '|',
      'numberedList',
      'bulletedList',
      '|',
      'outdent',
      'indent',
      '|',
      'horizontalLine',
      'specialCharacters',
      'todoList',
      'link',
      'blockQuote',
      'imageUpload',
      'insertTable',
      'mediaEmbed',
      '|',
      'undo',
      'redo',
      'findAndReplace',
      '|',
      'exportPdf',
      'exportWord',
      '|',
      'pageBreak',
      'previousPage',
      'nextPage',
      'pageNavigation'
    ]
  },
  language: 'pt-br',
  image: {
    toolbar: [
      'imageTextAlternative',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties'
    ]
  },
  pagination: {
    pageWidth: '21cm',
    pageHeight: '29.7cm',
    pageMargins: {
      top: '20mm',
      bottom: '20mm',
      left: '12mm',
      right: '12mm'
    }
  },
  exportPdf: {
    stylesheets: [
      'EDITOR_STYLES'
    ],
    fileName: 'documento.pdf',
    converterOptions: {
      format: 'A4',
      margin_top: '20mm',
      margin_bottom: '20mm',
      margin_right: '12mm',
      margin_left: '12mm',
      page_orientation: 'portrait'
    }
  },
  exportWord: {
    stylesheets: [
      'EDITOR_STYLES'
    ],
    fileName: 'documento.docx',
    converterOptions: {
      format: 'A4',
      margin_top: '20mm',
      margin_bottom: '20mm',
      margin_right: '12mm',
      margin_left: '12mm'
    }
  }
};

export default Editor;
