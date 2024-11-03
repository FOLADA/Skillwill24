import React, { ChangeEvent, useMemo, useState, useTransition } from 'react'
import { photos } from '../interfaces/photos'
import { IPhotos } from '../interfaces/photos.interface'

const Resources:React.FC = () => {
    const [data, setData] = useState<IPhotos[]>(photos)
    const [value, setValue] = useState('')
    const [isPending, start] = useTransition()

    const FilteredData = useMemo(() => { 
        return photos.filter(photo => photo.title.toLocaleLowerCase().includes(value))
    }, [value])
    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => { 
        setValue(e.target.value)
        start(() => { 
          setValue(e.target.value)
        })
    }
  return (
    <div className='Home-div'>
        <div>
            <input type="text" onChange={onChangeInput} />
        </div>
        {isPending && <h1>LOADING . . . </h1>}
      {FilteredData.map(({id,title,url}) => 
      <div key={id}>
        <h1>{title}</h1>
        <h1>{url}</h1>
        </div>)}
    </div>
  )
}

export default Resources
