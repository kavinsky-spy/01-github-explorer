import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss'; 

export function App() {

//throw new Error('Forninho caiu.');

    return (
        <>
            <RepositoryList/>
            <Counter/>
        </>
    
    );
}