import {
	FieldPath,
	FieldValues,
	UseFormClearErrors,
	UseFormGetFieldState,
	UseFormHandleSubmit,
	UseFormReset,
	UseFormResetField,
	UseFormSetError,
	UseFormSetFocus,
	UseFormTrigger,
	UseFormUnregister,
	UseFormWatch,
} from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { Control, FieldPathValue } from 'react-hook-form/dist/types';
import { FormState, UseFormGetValues, UseFormSetValue } from 'react-hook-form/dist/types/form';

export type TControl<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
	name: TName;
	rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
	defaultValue?: FieldPathValue<TFieldValues, TName>;
	watch?: UseFormWatch<TFieldValues>;
	getValues?: UseFormGetValues<TFieldValues>;
	getFieldState?: UseFormGetFieldState<TFieldValues>;
	setError?: UseFormSetError<TFieldValues>;
	clearErrors?: UseFormClearErrors<TFieldValues>;
	setValue?: UseFormSetValue<TFieldValues>;
	trigger?: UseFormTrigger<TFieldValues>;
	formState?: FormState<TFieldValues>;
	resetField?: UseFormResetField<TFieldValues>;
	reset?: UseFormReset<TFieldValues>;
	handleSubmit?: UseFormHandleSubmit<TFieldValues>;
	unregister?: UseFormUnregister<TFieldValues>;
	control?: Control<TFieldValues>;
	setFocus?: UseFormSetFocus<TFieldValues>;
};
