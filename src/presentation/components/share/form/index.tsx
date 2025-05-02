import React, {ReactNode} from 'react';
import {FieldValues, FormProvider, UseFormReturn} from 'react-hook-form';

type FormProps = {
  methods: UseFormReturn<FieldValues, any, undefined>;
  children: ReactNode;
};

const Form = ({methods, children}: FormProps) => {
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default Form;
