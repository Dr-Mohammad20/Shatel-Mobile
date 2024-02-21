// General import
import React, { useContext, useState } from 'react';
import Link from 'next/link';
///context
import { stateContext } from '../context/StateContextProvider';
//Styles
import styles from '@/styles/UserPage.module.css';

const UpdateComment = ({ data }) => {
  const [value, setValue] = useState('');
  const { state, dispatch } = useContext(stateContext);

  const clickHandler = () => {
    dispatch({ payload: { id: data.id, comment: value } });
    setValue('');
  };

  return (
    <div className={styles.UpdateContainer}>
      <label className={styles.oldComment}>{data?.comment}</label>
      <textarea
        rows={10}
        value={value}
        placeholder="Write your comment"
        wrap="soft"
        maxLength={500}
        onChange={(event) => setValue(event.target.value)}
        className={styles.textarea}
      />
      <button onClick={clickHandler}>change comment</button>
      <Link className={styles.BtnSignIn} href="/">
        Back to home
      </Link>
    </div>
  );
};

export default UpdateComment;
