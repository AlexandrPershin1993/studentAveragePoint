import React from 'react';
import { Form, Field } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import styles from './index.module.css';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';

const onSubmit = () => {

};

const GetCreditStep2 = () => {
const lengthSteps = useSelector(state => state.credit.lengthSteps);
  return (
    <div className={styles.container}>
      <h1 className={styles.header1lvl}> 
        Получить зачет автоматом
      </h1>
      <h2 className={styles.header2lvl}>
        Шаг 2 из {lengthSteps}
      </h2>
      <Form onSubmit={onSubmit}>
        {(props) => (
          <form className={styles.form}>
            
            <Button value='Следующий шаг' />
          </form>
        )}
      </Form>
    </div>
  );
};

export default GetCreditStep2;