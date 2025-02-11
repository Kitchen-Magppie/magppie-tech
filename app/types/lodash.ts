import { v4 as uuidv4 } from 'uuid';
//====================================================================
import _ from 'lodash';
type TLabelify = { value: string; label: string };
type TDownload = { url: string; name: string };

type TFromCanvasElementToFile = {
  element: HTMLCanvasElement;
  name: string;
  type: string;
};

interface TLodashMixin extends _.LoDashStatic {
  labelify: (e: string[]) => TLabelify[];
  titleCase: (e: string) => string;
  labelCase: (e: string) => string;
  isNumericString: (e: string) => boolean;
  mapNums: (e: unknown[]) => number[];
  uuid: () => string;
  download: (e: TDownload) => void;
  fromCanvasElementToFile: (e: TFromCanvasElementToFile) => File;
  base64ToFile: (content: string, fileName: string) => File;
  fromStrToSentence: (arr: string[]) => string;
}

function titleCase(str: string) {
  return _.startCase(_.camelCase(str));
}

function labelCase(str: string) {
  return titleCase(str?.replace(/-/g, ' ')?.replace(/_/g, ' '));
}

function isNumericString(value: string) {
  return _.isString(value) && /^\d+$/.test(value);
}

function mapNums(value: string[]) {
  return value?.map((item) => Number(item));
}

function uuid(): string {
  return uuidv4();
}

function labelify(e: string[]): TLabelify[] {
  return e?.map((value) => ({ value, label: value }));
}

function download(args: TDownload): void {
  const link = document.createElement('a');
  link.download = args.name;
  link.href = args.url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function fromCanvasElementToFile(e: TFromCanvasElementToFile) {
  const dataURL = e.element.toDataURL(e.type);

  // Create a Blob object
  const blob = new Blob([dataURL], { type: e.type });

  // Create a File object
  const file = new File([blob], e.name, { type: e.type });
  return file;
}

function base64ToFile(base64String: string, fileName: string) {
  const imageType = base64String.split(';')[0].split(':')[1];
  const byteString = atob(base64String.split(',')[1]);
  const arrayBuffer = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    arrayBuffer[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([arrayBuffer], { type: imageType });
  return new File([blob], fileName, { type: imageType });
}

function fromStrToSentence(arr: string[]): string {
  const filteredArr = _.uniq(arr.filter((str) => str.trim() !== ''))?.sort(); // Remove empty strings

  if (filteredArr.length === 0) {
    return ''; // Handle empty array
  } else if (filteredArr.length === 1) {
    return filteredArr[0];
  } else if (filteredArr.length === 2) {
    return filteredArr.join(' & ');
  } else {
    const lastIndex = filteredArr.length - 1;
    return (
      filteredArr.slice(0, lastIndex).join(', ') +
      ' & ' +
      filteredArr[lastIndex]
    );
  }
}
_.mixin({
  download,
  labelify,
  titleCase,
  labelCase,
  isNumericString,
  mapNums,
  uuid,
  fromCanvasElementToFile,
  base64ToFile,
  fromStrToSentence,
});
export default _ as TLodashMixin;
