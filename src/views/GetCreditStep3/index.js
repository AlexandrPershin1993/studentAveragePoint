import React, { useCallback, useMemo } from 'react';
import { Form, Field } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import styles from './index.module.css';
import Button from '../../components/Button';
import { actionsCredit } from '../../state/credit/actions';
import { createArrayComponents } from '../../utils/component';
import Header from '../../components/Header';

const optionItem = (i) => (
  <option name={i} key={i}>
    {i}
  </option>
);

const initialValuesForm = {
  numberMissingLessons: 0
};

const GetCreditStep3 = () => {
  const dispatch = useDispatch();
  const onClick = (value) => {
    dispatch(push('/4'));
    dispatch(actionsCredit.setStep(4));
    dispatch(actionsCredit.setNumberMissingLessons(value.numberMissingLessons));
  };
  const onClickCallback = useCallback(onClick, []);

  const numberLessons = useSelector(state => state.credit.numberLessons);
  const lengthSteps = useSelector(state => state.credit.lengthSteps);
  const step = useSelector(state => state.credit.step);

  const arrayOptionMemo = useMemo(
    () => createArrayComponents(numberLessons + 1, optionItem),
    [numberLessons]
  );

  const form = ({handleSubmit}) => (
    <form className={styles.form}>
      <div className={styles.field}>
        <legend className={styles.legend}>
           Укажите колличество пропущенных занятий по неуважительной причине
        </legend>
        <Field name="numberMissingLessons" component="select" className={styles.select}>
          {arrayOptionMemo}
        </Field>
      </div>
      <Button value='Следующий шаг' onClick={handleSubmit}/>
    </form>
  );

  const formCallback = useCallback(form, [arrayOptionMemo]);

  return (
    <div className={styles.container}>
      <Header step={step} lengthSteps={lengthSteps}/>
      <h2 className={styles.header2lvl}>
          По этому предмету у вас {numberLessons} занятий
      </h2>
      <Form onSubmit={onClickCallback} initialValues={initialValuesForm} render={formCallback} />
    </div>
  );
};

export default GetCreditStep3;