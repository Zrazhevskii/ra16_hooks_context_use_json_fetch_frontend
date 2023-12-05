import { Data } from './components/Data';
import { Error } from './components/Error';
import { Loading } from './components/Loading';

const URL = 'http://localhost:3000/';

export default function App() {
    return (
        <div className='main-wrapper'>
            <Data url={URL + 'data'} title='Успешное получение данных' />
            <Error url={URL + 'error'} title='Получение 500 ошибки' />
            <Loading url={URL + 'loading'} title='Индикатор загрузки' />
        </div>
    );
}
