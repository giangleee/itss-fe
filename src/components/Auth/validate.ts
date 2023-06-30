import _ from "lodash";

const validateEmail = (email: string) => {
  if (_.isEmpty(email)) return "メールアドレスを入力してください";
  if (/^\S+@\S+\.\S+$/.test(email) === false) return "メールアドレスの形式が正しくありません";
  return false;
};
const validatePassword = (password: string) => {
  if (_.isEmpty(password)) return "パスワードを入力してください";
  if (password.length < 6) return "パスワードは6文字以上で入力してください";
  return false;
};
const validatePhone = (phone: string) => {
  if (_.isEmpty(phone)) return "電話番号を入力してください";
  if (/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(phone) === false) return "電話番号の形式が正しくありません";
  return false;
};
const commonValidate = (value: string, fieldName: string) => {
  if (_.isEmpty(value)) return `${fieldName}を入力してください`;
  if (value.length > 255) return `${fieldName}は255文字以内で入力してください`;
  return false;
};
export { validateEmail, validatePassword, validatePhone, commonValidate };
