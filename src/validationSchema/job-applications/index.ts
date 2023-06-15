import * as yup from 'yup';

export const jobApplicationValidationSchema = yup.object().shape({
  resume: yup.string().required(),
  contact_information: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
