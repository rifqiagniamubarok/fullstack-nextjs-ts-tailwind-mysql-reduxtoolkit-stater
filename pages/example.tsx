import { NextPage } from 'next';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../stores';
import { increment } from '../stores/Example/counterSlice';

interface Props {}

const Example: NextPage<Props> = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: RootState) => state.counter.value);
  console.log(counterValue);
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-slate-50 dark:bg-slate-800">
      <div className="flex flex-col items-center gap-2">
        <p className="text-slate-800 dark:text-slate-50 text-3xl">Hello!</p>
        <button onClick={() => dispatch(increment())}>add</button>
      </div>
    </div>
  );
};

export default Example;
