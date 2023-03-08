interface RepositoryItemProps {
    repository: {
        name: string;
        descripition: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {

    return (
            <li>
                <strong>{props.repository.name ?? 'Default'}</strong>
                <p>{props.repository.descripition}</p>

                <a href={props.repository.html_url}>
                    Acessar repositorio
                </a>
            </li>
    )

}

