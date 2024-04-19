import './styles.css';

export default function ProductCategory({name} : Props) {
    return (
        <>
        <div className='pr-productcategory-container'>
            <h1>{name}</h1>
        </div>
        </>
    )
}