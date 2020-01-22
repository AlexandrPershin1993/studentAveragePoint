import React from 'react';
import { Form, Field } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import styles from './index.module.css';
import Button from '../../components/Button';
import { actionsCredit } from '../../state/credit/actions';
import { createArrayComponents } from '../../utils/component';

const GetCreditStep3 = () => {
  const dispatch = useDispatch();
  const onClick = (value) => {
    dispatch(push('/4'));
    dispatch(actionsCredit.setStep(4));
    dispatch(actionsCredit.setNumberMissingLessons(value.numberMissingLessons));
  };
  const numberLessons = useSelector(state => state.credit.numberLessons);
  const lengthSteps = useSelector(state => state.credit.lengthSteps);

  const arrayOption = createArrayComponents(numberLessons + 1, (i) => (
    <option name={i} key={i}>
      {i}
    </option>
  ))

  return (
    <div className={styles.container}>
      <h1 className={styles.header1lvl}> 
        Получить зачет автоматом
      </h1>
      <h2 className={styles.header2lvl}>
        Шаг 3 из {lengthSteps} <br />
        По этому предмету у вас {numberLessons} занятий
      </h2>
      <Form onSubmit={onClick} initialValues={{numberMissingLessons: 0}}>
        {({handleSubmit, ...props}) => (
          <form className={styles.form}>
            <div className={styles.field}>
              <legend className={styles.legend}>
                 Укажите колличество пропущенных занятий по неуважительной причине
              </legend>
              <Field name="numberMissingLessons" component="select" className={styles.select}>
                {arrayOption}
              </Field>
            </div>
            <Button value='Следующий шаг' onClick={handleSubmit}/>
          </form>
        )}
      </Form>
    </div>
  );
};

export default GetCreditStep3;