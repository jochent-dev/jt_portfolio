import './index.css'


export default function ProgressBar(props: { progress: any; }){
    const childStyle = {
        width: `${props.progress}%`
    };
    return(
    <div className='parent_div'>
        <div style={childStyle} className='child_div'>
            <p  className='progresstext'>
                {`${props.progress}%`}
            </p>
        </div>
    </div>)

}