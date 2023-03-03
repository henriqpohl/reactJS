import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    descripition: 'Forms in React',
    link: 'https://github.com/inform/unform'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                <RepositoryItem repository={repository}/>   
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}