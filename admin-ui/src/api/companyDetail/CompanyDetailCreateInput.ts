import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyDetailCreateInput = {
  businessAddress: string;
  businessCategory?: string | null;
  businessEmail?: string | null;
  businessPhoneNumber?: string | null;
  companyName: string;
  companyUrl?: string | null;
  cvrNumber: string;
  logo?: string | null;
  shortIntroductionToTheCompany?: string | null;
  user?: UserWhereUniqueInput | null;
};
