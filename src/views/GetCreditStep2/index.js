import React from 'react';
import { Form, Field } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import styles from './index.module.css';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import { actionsCredit } from '../../state/credit/actions';
import { createArrayComponents } from '../../utils/component';

const GetCreditStep2 = () => {
  const dispatch = useDispatch();
  const onClick = (value) => {
    dispatch(push('/3'));
    dispatch(actionsCredit.setStep(3));
    dispatch(actionsCredit.setArrayEstimation(Object.values(value)));
  };
  const lengthSteps = useSelector(state => state.credit.lengthSteps);
  const lengthEstimation = useSelector(state => state.credit.data.numberEstimation);
  
  const arrayInputEstimation = createArrayComponents(lengthEstimation, (i) => (
    <Field 
      name={`estimation ${i}`}
      parse={value => {
        if(value) {
          const str = value.replace(/[^0-5]/g, '');
          return str.substr(0, 1);
        };
      }}
      validate={(value) => {
        if(!value) return 'поле пустое'
      }}
      key={i}
    >
      {(props) =>(
        <React.Fragment>
          {props.meta.error && props.meta.touched ? <ErrorMessage error={props.meta.error} /> : null}
          <input 
            type="text" 
            placeholder="Введите оценку"
            className={styles.inputText}
            {...props.input}
          />
        </React.Fragment>
      )}
    </Field>
  ))

  return (
    <div className={styles.container}>
      <h1 className={styles.header1lvl}> 
        Получить зачет автоматом
      </h1>
      <h2 className={styles.header2lvl}>
        Шаг 2 из {lengthSteps}
      </h2>
      <Form onSubmit={onClick}>
        {({handleSubmit, ...props}) => (
          <form className={styles.form}>
            <div className={styles.field}>
              <legend className={styles.legend}>
                 Введите оценки
              </legend>
              {arrayInputEstimation}
            </div>
            <Button value='Следующий шаг' onClick={handleSubmit}/>
          </form>
        )}
      </Form>
    </div>
  );
};

export default GetCreditStep2;