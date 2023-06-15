import * as yup from 'yup';
import { jobApplicationValidationSchema } from 'validationSchema/job-applications';

export const companyValidationSchema = yup.object().shape({
  description: yup.string(),
  image: yup.string(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  job_application: yup.array().of(jobApplicationValidationSchema),
});
