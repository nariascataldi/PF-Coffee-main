export default function validate(post) {
  let imgValidate = /(https?:\/\/.*\.(?:png|jpg))/;
  let testName = /^[A-Z][a-z][^$()!¡@#/=¿{}?*%&|<>#]*$/;
  let testDescription = /^[A-Za-z]+$/i;
  let testNumber = /^\d{1,2}$/;

  let errors = {};
  /** TITLE   */
  if (!post.title) errors.title = 'Enter product name';
  if (!testName.test(post.title)) errors.title = 'Start the name with capital letter. Only characters "":.,_- are accepted';
  if (100 <= [post.title].length) errors.title = 'Not exceed 100 characters';
  /** IMAGE */
  if (!post.image || !imgValidate.test(post.image)) errors.image = `Enter the URL of a representative image in jpg or png format`;
  /** Diet */
  if (![post.diet].length) errors.diet = 'Choose at least one type of diet';

  return errors;
}