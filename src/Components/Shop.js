import React , {useState} from 'react'
import "../Style/Shop.css"

function Shop() {
  const [first, setFirst] = useState("tümürünler");

  const data = [
    {
      id: 1,
      name: "bitkiler",
      all: "tümürünler",
      fiyat: 49.99,
      href: "#",
      image: "https://static.ticimax.cloud/12745/uploads/urunresimleri/buyuk/ludwigia-repens-green-ince-gul-d303.jpg",
      bitkiName: "Akvaryum Gülü",
    },
    {
      id: 2,
      name: "kumlar",
      all: "tümürünler",
      href: "#",
      fiyat: 23,
      image: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty343/product/media/images/20220226/21/59210078/398542198/1/1_org_zoom.jpg",
      bitkiName: "Doğal Dere Kumu ",
    },
    {
      id: 3,
      name: "kumlar",
      all: "tümürünler",
      fiyat: 12,
      image: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty333/product/media/images/20220218/13/53026279/391248797/1/1_org_zoom.jpg",
      href: "#",
      bitkiName: "Siyah Bitki Kumu",
    },
    {
      id: 4,
      name: "gübre",
      fiyat: 12,
      all: "tümürünler",
      image: "https://productimages.hepsiburada.net/s/113/375/110000060561786.jpg",
      href: "#",
      bitkiName: "Misket Gübre",
    },
    {
      id: 6,
      name: "kumlar",
      fiyat: 45,
      href: "#",
      all: "tümürünler",
      image: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty339/product/media/images/20220223/0/56784103/395784250/1/1_org_zoom.jpg",
      bitkiName: " Akvaryum Ince Lav Kumu",
    },
    {
      id: 7,
      name: "kumlar",
      fiyat: 45,
      all: "tümürünler",
      href: "#",
      image: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty343/product/media/images/20220226/19/59125588/391248800/1/1_org_zoom.jpg",
      bitkiName: "Doğal Bitki Kumu",
    },
    {
      id: 8,
      name: "taşlar",
      fiyat: 45,
      all: "tümürünler",
      href: "#",
      image: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty342/product/media/images/20220226/22/59252027/398617286/1/1_org_zoom.jpg",
      bitkiName: "Akvaryum Lav Taşı",
    },
    {
      id: 9,
      name: "taşlar",
      fiyat: 45,
      all: "tümürünler",
      href: "#",
      image: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty343/product/media/images/20220227/0/59344516/398715790/1/1_org_zoom.jpg",
      bitkiName: "Akvaryum Tasarım Taşı",
    },
  ];

  const handleClick = (item) => {
    setFirst(item);
  };
  return (
    <div className='shop'>
      <div className='shop-menu'>
        <div className='shop-link'>
        <button onClick={() => handleClick("tümürünler")}>Tüm Ürünler</button>
        <button onClick={() => handleClick("bitkiler")}>Bitkiler</button>
        <button onClick={() => handleClick("kumlar")}>Kumlar</button>
        <button onClick={() => handleClick("gübre")}>Gübre</button>
        <button onClick={() => handleClick("taşlar")}>Taşlar</button>
        </div>
      </div>
      <div className='shop-container'>
        <div className='item'>
        {data
          .filter((item) => item.name === first)
          .map((item) => (
            <div key={item.id} className="box">
              <img src={item.image} ></img>
              <p className='text-center'>{item.bitkiName}</p>
              <h5 className='text-center'>Fiyat: {item.fiyat} TL</h5>
              <a href={item.href}>
                <button>Satın al</button>
              </a>
            </div>
          ))}
          {data
          .filter((item) => item.all === first)
          .map((item) => (
            <div key={item.id} className="box">
              <img src={item.image} ></img>
              <p className='text-center'>{item.bitkiName}</p>
              <h5 className='text-center'>Fiyat: {item.fiyat} TL</h5>
              <a href={item.href}>
                <button>Satın al</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop