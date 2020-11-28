import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { areas, devices, fields } from "../../../constants";
import { JobDetails } from "../../../pages/OfferJobPage";
import Input from "../../Input";
import Select from "../../Select";

const RequiredMessage = "مطلوب";
const SalaryRangeErrorMessage = "حد الاعلى للراتب يجب ان يكون اعلى من الحد الادنى";
const EmployeesNeededErrorMessage = "عمليات التوظيف يجب ان تكون واحد او اكثر";
const NumberErrorMessage = "يجب ان يكون رقم";

const JobTypes = ["دوام كامل", "دوام جزئي", "مؤقت", "عقد", "فترة تدريب", "عمولة", "لحديثي التخرج", "دائم"];
const SalaryPeriods = ["شهرياً", "اسبوعياً"];
const Urgencies = ["1 - 3 أيام"];

interface Props {
  onSubmit: (values: JobDetails) => void;
  initialValues: JobDetails;
}

const JobDetailsForm: FunctionComponent<Props> = (props) => {
  const validationSchema = Yup.object({
    title: Yup.string().required(RequiredMessage),
    type: Yup.string().required(RequiredMessage),
    field: Yup.string().required(RequiredMessage),
    salaryLowerEnd: Yup.number().typeError(NumberErrorMessage).required(RequiredMessage),
    salaryHigherEnd: Yup.number()
      .typeError(NumberErrorMessage)
      .min(Yup.ref("salaryLowerEnd"), SalaryRangeErrorMessage)
      .required(RequiredMessage),
    salaryPeriod: Yup.string().required(RequiredMessage),
    area: Yup.string().required(RequiredMessage),
    employeesNeeded: Yup.number()
      .typeError(NumberErrorMessage)
      .min(1, EmployeesNeededErrorMessage)
      .required(RequiredMessage),
    urgency: Yup.string().required(RequiredMessage),
  });

  function handleNumberInputChange(e: React.ChangeEvent<any>, callback: (value: string) => void) {
    const { value } = e.target;
    const englishValue = value.replace(/[٠-٩]/g, (arabicNumber: string) =>
      "٠١٢٣٤٥٦٧٨٩".indexOf(arabicNumber).toString()
    );
    if (Number(englishValue) || englishValue === "") callback(englishValue);
  }

  const onSubmit = (values: JobDetails, { setSubmitting }: FormikHelpers<JobDetails>) => {
    props.onSubmit(values);
  };

  return (
    <Container>
      <FormTitle>
        أعلن عن وظيفة /<Grey> تفاصيل الوظيفة</Grey>
      </FormTitle>
      <Formik initialValues={props.initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formikProps) => (
          <Form>
            <Container>
              <FieldContainer>
                <Label htmlFor="title">اسم الوظيفة</Label>
                <Field as={Input} id="title" name="title" />
                <ErrorMessage name="title" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <FieldContainer>
                <Label htmlFor="type">نوع الوظيفة</Label>
                <Field as={Select} id="type" name="type">
                  {JobTypes.map((jobType) => (
                    <option key={jobType} value={jobType}>
                      {jobType}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="type" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <FieldContainer>
                <Label htmlFor="field">مجال الوظيفة</Label>
                <Field as={Select} id="field" name="field">
                  {fields.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="field" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <FieldContainer>
                <Label>راتب الوظيفة</Label>
                <RangeContainer>
                  <Field
                    as={StyledMiniField}
                    id="salaryLowerEnd"
                    name="salaryLowerEnd"
                    placeholder="500 Kd"
                    onChange={(e: React.ChangeEvent<any>) =>
                      handleNumberInputChange(e, (value: string) => formikProps.setFieldValue("salaryLowerEnd", value))
                    }
                  />
                  <ToText>إلى</ToText>
                  <Field
                    as={StyledMiniField}
                    id="salaryHigherEnd"
                    name="salaryHigherEnd"
                    placeholder="2000 Kd"
                    onChange={(e: React.ChangeEvent<any>) =>
                      handleNumberInputChange(e, (value: string) => formikProps.setFieldValue("salaryHigherEnd", value))
                    }
                  />
                  <Field as={StyledMiniSelect} id="salaryPeriod" name="salaryPeriod">
                    {SalaryPeriods.map((period) => (
                      <option key={period} value={period}>
                        {period}
                      </option>
                    ))}
                  </Field>
                </RangeContainer>
                <ErrorMessage name="salaryLowerEnd" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
                <ErrorMessage name="salaryHigherEnd" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <FieldContainer>
                <Label htmlFor="area">مكان الوظيفة</Label>
                <Field as={Select} id="area" name="area">
                  {areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="area" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <FieldContainer>
                <Label htmlFor="employeesNeeded">كم عدد عمليات التوظيف المطلوبة لهذا المنصب؟</Label>
                <Field
                  as={Input}
                  id="employeesNeeded"
                  name="employeesNeeded"
                  onChange={(e: React.ChangeEvent<any>) =>
                    handleNumberInputChange(e, (value: string) => formikProps.setFieldValue("employeesNeeded", value))
                  }
                />
                <ErrorMessage name="employeesNeeded" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <FieldContainer>
                <Label htmlFor="urgency">ما مدى سرعة احتياجك للقيام بالتوظيف؟</Label>
                <Field as={Select} id="urgency" name="urgency" type="urgency">
                  {Urgencies.map((urgency) => (
                    <option key={urgency} value={urgency}>
                      {urgency}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="urgency" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <Button type="submit">متابعة</Button>
            </Container>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* Remove Arrows from type="number" fields for Firefox*/
  input[type="number"] {
    -moz-appearance: textfield;
  }

  @media ${devices.mobile} {
    flex-grow: 1;
  }
`;

const FormTitle = styled.div`
  font-size: 22px;
  line-height: 42px;
  color: #37333e;
  margin-bottom: 24px;

  @media ${devices.mobile} {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const Grey = styled.span`
  color: #afa9b8;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media ${devices.mobile} {
    margin-bottom: 20px;
  }
`;

const Label = styled.label`
  font-size: 12px;
  line-height: 23px;
  color: #a19baa;

  @media ${devices.mobile} {
    font-size: 10px;
  }
`;

const StyledErrorMessage = styled.p`
  font-size: 12px;
  line-height: 23px;
  color: #d1365d;

  @media ${devices.mobile} {
    font-size: 10px;
  }
`;

const Button = styled.button`
  background: linear-gradient(138.12deg, #a783e2 -0.01%, #7749c2 94.77%);
  border-radius: 6px;
  font-size: 12px;
  line-height: 23px;
  font-family: inherit;
  color: #ffffff;
  padding: 14px 171px;
  border: none;
  cursor: pointer;

  @media ${devices.mobile} {
    padding: 14px;
  }
`;

const RangeContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${devices.mobile} {
    flex-wrap: wrap;
  }
`;

const StyledMiniField = styled(Input)`
  width: 95px;

  @media ${devices.mobile} {
    width: 80px;
    flex-grow: 1;
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const StyledMiniSelect = styled(Select)`
  width: 113px;
  background: #efebf5;
  margin-right: 21px;
  border: 1px solid #efebf5;

  @media ${devices.mobile} {
    width: 100%;
    flex-grow: 1;
    font-size: 12px;
    margin-right: 0;
  }
`;

const ToText = styled.p`
  margin: 0 8px;
  font-size: 12px;
  line-height: 23px;
  color: #37333e;

  @media ${devices.mobile} {
    font-size: 10px;
    margin-bottom: 10px;
  }
`;

export default JobDetailsForm;
