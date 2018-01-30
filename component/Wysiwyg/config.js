import bold from '../../images/icon/bold.svg';
import italic from '../../images/icon/italic.svg';
import underline from '../../images/icon/underline.svg';
import strikethrough from '../../images/icon/strikethrough.svg';
import fontSize from '../../images/icon/font-size.svg';
import indent from '../../images/icon/indent.svg';
import outdent from '../../images/icon/outdent.svg';
import ordered from '../../images/icon/list-ordered.svg';
import unordered from '../../images/icon/list-unordered.svg';
import left from '../../images/icon/align-left.svg';
import center from '../../images/icon/align-center.svg';
import right from '../../images/icon/align-right.svg';
import justify from '../../images/icon/align-justify.svg';
import color from '../../images/icon/color.svg';
import image from '../../images/icon/image.svg';
import undo from '../../images/icon/undo.svg';
import redo from '../../images/icon/redo.svg';

export default {
  options: [
    'blockType',
    // 'fontFamily',
    'inline',
    // 'colorPicker',
    // 'image',
    'list',
    'textAlign',
    'history',
  ],
  inline: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['bold', 'italic', 'underline', 'strikethrough'],
    bold: { icon: bold, className: undefined, title: 'Bold' },
    italic: { icon: italic, className: undefined, title: 'Italic' },
    underline: { icon: underline, className: undefined, title: 'Underline' },
    strikethrough: { icon: strikethrough, className: undefined, title: 'Strikethrough' },
  },
  blockType: {
    inDropdown: true,
    options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote'],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    title: 'Block Type',
  },
  fontSize: {
    icon: fontSize,
    options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    title: 'Font Size',
  },
  fontFamily: {
    options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    title: 'Font Family',
  },
  list: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['unordered', 'ordered', 'indent', 'outdent'],
    unordered: { icon: unordered, className: undefined, title: 'Unordered' },
    ordered: { icon: ordered, className: undefined, title: 'Ordered' },
    indent: { icon: indent, className: undefined, title: 'Indent' },
    outdent: { icon: outdent, className: undefined, title: 'Outdent' },
    title: 'List',
  },
  textAlign: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['left', 'center', 'right', 'justify'],
    left: { icon: left, className: undefined, title: 'Left' },
    center: { icon: center, className: undefined, title: 'Center' },
    right: { icon: right, className: undefined, title: 'Right' },
    justify: { icon: justify, className: undefined, title: 'Justify' },
    title: 'Text Align',
  },
  colorPicker: {
    icon: color,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    colors: ['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
      'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
      'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
      'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
      'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
      'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)'],
    title: 'Color Picker',
  },
  image: {
    icon: image,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    urlEnabled: true,
    uploadEnabled: true,
    alignmentEnabled: true,
    uploadCallback: undefined,
    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
    defaultSize: {
      height: 'auto',
      width: 'auto',
    },
    title: 'Image',
  },
  history: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['undo', 'redo'],
    undo: { icon: undo, className: undefined, title: 'Undo' },
    redo: { icon: redo, className: undefined, title: 'Redo' },
    title: 'History',
  },
}
