import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const IMAGES_PATH_PREFIX = path.resolve(__dirname, '../../../images');

function getImage(request, h) {
  return h.file(`${IMAGES_PATH_PREFIX}/${request.params.file}`);
}

export default {
  getImage,
};
