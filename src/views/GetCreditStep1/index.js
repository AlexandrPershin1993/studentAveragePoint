import React from 'react';
import { Form, Field } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import styles from './index.module.css';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import { actionsCredit } from '../../state/credit/actions';

const validatorEstimation = (number) => number > 0

const GetCreditStep1 = () => {
const dispatch = useDispatch();
const onSubmit = (value) => {
  dispatch(push('/2'));
  dispatch(actionsCredit.setData(value));
};
const lengthSteps = useSelector(state => state.credit.lengthSteps);
  return (
    <div className={styles.container}>
      <h1 className={styles.header1lvl}> 
        Получить зачет автоматом
      </h1>
      <h2 className={styles.header2lvl}>
        Шаг 1 из {lengthSteps}
      </h2>
      <Form 
        onSubmit={onSubmit}
        validate={(values) => {
          const objError = {};
          if(!values.nameObject) {
            objError.nameObject = 'поле пустое'
          };
          if(!values.numberEstimation) {
            objError.numberEstimation = 'поле пустое'
          } else if(!validatorEstimation(values.numberEstimation)) {
            objError.numberEstimation = 'значение меньше 0'
          }
          return objError;
        }}
      >
        {({handleSubmit, ...props}) => (
          <form className={styles.form}>
            <div className={styles.field}>
              <legend className={styles.legend}>
                 Введите наименование предмета
              </legend>
              <Field 
                name="nameObject"
                parse={value => {
                  if(value) return value.replace(/[0-9]/g, '');
                }}
              >
                {(props) =>(
                  <React.Fragment>
                    {props.meta.error && props.meta.touched ? <ErrorMessage error={props.meta.error} /> : null}
                    <input 
                      type="text" 
                      placeholder="Введите наименование"
                      className={styles.inputText}
                      {...props.input}
                    />
                  </React.Fragment>
                )}
              </Field>
            </div>
            <div className={styles.field}>
              <legend className={styles.legend}>
                Введите кол-во оценок больше 0
              </legend>
              <Field 
                name="numberEstimation"
                parse={value => {
                  if(value) return value.replace(/[^0-9]/g, '');
                }}
              >
                {(props) =>(
                  <React.Fragment>
                    {props.meta.error && props.meta.touched ? <ErrorMessage error={props.meta.error} /> : null}
                    <input 
                      type="text" 
                      placeholder="Введите колличество"
                      className={styles.inputText}
                      {...props.input}
                    />
                  </React.Fragment>
                )}
              </Field>
            </div>
            <Button value='Следующий шаг' onClick={handleSubmit}/>
          </form>
        )}
      </Form>
    </div>
  );
};

export default GetCreditStep1;