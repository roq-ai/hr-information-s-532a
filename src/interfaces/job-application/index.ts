import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobApplicationInterface {
  id?: string;
  resume: string;
  contact_information: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface JobApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  resume?: string;
  contact_information?: string;
  company_id?: string;
}
