import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postBreed } from "../../redux/actions";
import styles from './CreateBreed.module.css';


function validate(post) {
  let imgValidate = /(https?:\/\/.*\.(?:png|jpg))/;
  let testName = /^[A-Z][a-z][^$()!¡@#/=¿{}?*%&|<>#]*$/;
  let testNumber = /^\d{1,2}$/;
  let hi = post.metHeiMin;
  let ha = post.metHeiMax;
  let wi = post.metWeiMin;
  let wa = post.metWeiMax;
  let li = post.lifeMin;
  let la = post.lifeMax;

  let errors = {};
  /** NAME   */
  if (!post.name) errors.name = 'Enter breed name';
  if (!testName.test(post.name)) errors.name = 'Start the name with capital letter. Only characters "":.,_- are accepted';
  if (100 <= [post.name].length) errors.name = 'Not exceed 100 characters';
  /** HEIGHT   */
  if (!hi.length || hi < 0 || hi > 99 || !testNumber.test(hi)) errors.height = 'Enter a height value from 0 to 99'; //000
  if (!ha.length || ha < 0 || ha > 99 || !testNumber.test(ha)) errors.height = 'Enter a height value from 0 to 99';
  /** WEIGHT   */
  if (!wi.length || wi < 0 || wi > 99 || !testNumber.test(wi)) errors.metWeiMin = 'Enter a weight value from 0 to 99';
  if (!wa.length || wa < 0 || wa > 99 || !testNumber.test(wa)) errors.metWeiMax = 'Enter a weight value from 0 to 99';
  /** LIFE SPAN   */
  if (!li.length || li < 0 || li > 99 || !testNumber.test(li)) errors.life_span = 'Enter a life span value from 0 to 99';
  if (!la.length || la < 0 || la > 99 || !testNumber.test(la)) errors.life_span = 'Enter a life span value from 0 to 99';
  /** IMAGE */
  if (!post.image || !imgValidate.test(post.image)) errors.image = `Enter the URL of a representative image in jpg or png format`;
  /** TEMPERAMENT */
  if (![post.temp].length) errors.temp = 'Choose at least one type of temp';

  return errors;
}

export default function CreateBreed() {
  const dispatch = useDispatch();
  var temperament = useSelector((state) => state.temps);

  console.log({ temperament }); //array vacío
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTemps())
  }, [dispatch])

  const [post, setPost] = useState({
    "name": "",  //STRING
    "height": { "metric": "0 - 0" }, //JSON(STRING)
    "weight": { "metric": `0 - 0` },
    "life_span": "",
    "image": "https://www.lavanguardia.com/peliculas-series/images/serie/backdrop/2019/11/w1280/6b0Te76RADccC2NuefwN9CTQK4z.jpg",  //STRING
    "temperament": [], //STRING
    "metHeiMin": "",
    "metHeiMax": "",
    "metWeiMin": "",
    "metWeiMax": "",
    "lifeMin": "",
    "lifeMax": "",
  })
  function handleInputChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...post,
      [e.target.name]: e.target.value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0) {
      alert("Please fill in all the fields")
      console.log('handleSubmit ', { errors });
      // console.log('handleSubmit ', post.lifeMin);
      // console.log('handleSubmit ', post.lifeMax);
    }
    else {
      console.log('handleSubmit ', { post });
      dispatch(postBreed(post));
      alert('Breed create successfuly!');
      /**Clear */
      setPost({
        "name": "",
        "height": { "metric": `0 - 0` },
        "weight": { "metric": `0 - 0` },
        "life_span": "",
        "image": "",
        "temperament": [],
        "metHeiMin": "",
        "metHeiMax": "",
        "metWeiMin": "",
        "metWeiMax": "",
        "lifeMin": "",
        "lifeMax": "",
      })
    }
  };
  /**Temperament */
  function handleSelectTemps(e) {
    // if (!post.temperament.includes(e.target.value))
    setPost({
      ...post,
      temperament: Array.from(new Set([...post.temperament, e.target.value]))
    });
  };

  function handleDelete(el) {
    setPost({
      ...post,
      temperament: post.temperament.filter((temp) => temp !== el),
    });
  }

  /**Renderizado */
  return (
    <div className={styles.container}>
      <div className={styles.bkgcolor}>
        <div className={styles.form}>
          <h3>Please fill in all the fields</h3>
          <form onSubmit={e => handleSubmit(e)}>
            <div className={styles.name_container}>
              {/* <label>🐩 Breed 🐕</label> */}
              <input className={styles.inputLarge} placeholder="🐩 Breed 🐕" type="text" value={post.name} key='name' name='name' onChange={e => handleInputChange(e)} />
              {errors.name && (
                <p>{errors.name}</p>
              )}
            </div>
            <div className={styles.min_max_container}>
              <div className={styles.height_container}>
                {/* <div className={styles.height_text}>
                  <label>↕️ Height</label>
                  <div>Min</div><div> - </div><div>Max</div>
                </div> */}
                <div className={styles.height_input}>
                  <div><input className={styles.inputSmall} placeholder="↕️ MIN" type="number" min="0" max={post.metHeiMax} value={post.metHeiMin} key='metHeiMin' name='metHeiMin' onChange={e => handleInputChange(e)} />
                    {errors.metHeiMin && (
                      <p>{errors.metHeiMin}</p>
                    )}
                  </div>
                  {/* <div>Height</div> */}
                  <div><input className={styles.inputSmall} placeholder="↕️ MAX" type="number" min={post.metHeiMin} max='99' value={post.metHeiMax} key='metHeiMax' name='metHeiMax' onChange={e => handleInputChange(e)} />
                    {errors.metHeiMax && (
                      <p>{errors.metHeiMax}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.weight_container}>
                {/* <div className={styles.weight_text}>
                  <label>⚖️ Weight</label>
                  <div>Min</div><div> - </div><div>Max</div>
                </div> */}
                <div className={styles.weight_input}>
                  <div><input className={styles.inputSmall} placeholder="⚖️ MIN" type="number" min="0" max={post.metWeiMax} value={post.metWeiMin} key='metWeiMin' name='metWeiMin' onChange={e => handleInputChange(e)} />
                    {errors.metWeiMin && (
                      <p>{errors.metWeiMin}</p>
                    )}
                  </div>
                  {/* <div>Weight</div> */}
                  <div><input className={styles.inputSmall} placeholder="⚖️ MAX" type="number" min={post.metWeiMin} max='99' value={post.metWeiMax} key='metWeiMax' name='metWeiMax' onChange={e => handleInputChange(e)} />
                    {errors.metWeiMax && (
                      <p>{errors.metWeiMax}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.life_span_container}>
                {/* <div className={styles.life_span_text}>
                  <label>Life Span</label>
                  <div>Min</div><div> - </div><div>Max</div>
                </div> */}
                <div className={styles.life_span_input}>
                  <div><input className={styles.inputSmall} placeholder="❤️ MIN" type="number" min="0" max={post.lifeMax} value={post.lifeMin} key='lifeMin' name='lifeMin' onChange={e => handleInputChange(e)} />
                    {errors.lifeMin && (
                      <p>{errors.lifeMin}</p>
                    )}
                  </div>
                  {/* <div>Life Span</div> */}
                  <div><input className={styles.inputSmall} placeholder="❤️ MAX" type="number" min={post.lifeMin} max='99' value={post.lifeMax} key='lifeMax' name='lifeMax' onChange={e => handleInputChange(e)} />
                    {errors.lifeMax && (
                      <p>{errors.lifeMax}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.image_container}>
              {/* <label>📷 Image</label> */}
              <input className={styles.inputLarge} type="text" placeholder="📷 Image" value={post.image} key='image' name='image' onChange={e => handleInputChange(e)} />
              {errors.image && (
                <p>{errors.image}</p>

              )}
            </div>
            <div className={styles.temp}>
              <select onChange={e => handleSelectTemps(e)} defaultValue='default' className={styles.tempSelect}>
                <option value="default" disabled className={styles.tempOption}>Choose temperaments</option>
                {
                  temperament?.map((d) => d.name && (
                    <option value={d?.name} key={d?.name} className={styles.tempOption}>{d?.name}</option>
                  ))
                }
              </select>
              {errors.temp && (
                <p style={{ float: 'right' }}>{errors.temp}</p>
              )}
              <div className={styles.sidebar_box}>
                <p>You have selected that:</p>
                {post.temperament.map((el) => (
                  <div key={el} className={styles.selectedItems}>
                    <p>{el}</p>
                    <button onClick={() => handleDelete(el)}>x</button>
                  </div>
                ))}
              </div>
            </div>
            <button type='submit' className={styles.createButton} disabled={!post.name ? true : false} >Submit!</button>
          </form>
        <div className={styles.footer}>
          <Link to='/home'>
            <button className={styles.createButton}>Back</button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}
