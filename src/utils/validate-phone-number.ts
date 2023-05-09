import { CountryData } from "react-phone-input-2";

export default function validatePhoneNumber(
  countryData: CountryData,
  formattedValue: string
): boolean {
  return countryData.format.length === formattedValue.length;
}
