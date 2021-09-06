import React from 'react'

const NewsItem = (props) => {
        let {title,description,imgUrl,url,size}=props;
        return (
          <>
          <div class="card my-3 bg-dark" style={{}}>
             <a href={url} target="_blank" style={{borderBottom: "3px solid red"}}><img src={!imgUrl?"https://images.hindustantimes.com/img/2021/09/04/1600x900/199fd5f8-feaf-11eb-a995-8a2960d82288_1630717841594_1630717861684.jpg":imgUrl} class="card-img-top" alt="..."/></a>
             <div class="card text-white bg-dark" style={{}}>
                  <div class="card-body">
                    <h6 class="card-title text-white">{title}</h6>
                        <p class="card-text text-white text-sm">{description}...</p>
                        <strong><p class="card-text text-danger text-sm">By-{props.author}, {(Date(props.publishedAt)).slice(0,16)}</p></strong>
                    </div>
                </div>
            </div>
          </>
        )
  }

export default NewsItem
