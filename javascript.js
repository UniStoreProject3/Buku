const judul = document.querySelector('#title')
  fetch("buku.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      judul.insertAdjacentHTML('beforeend', `<h1 style="font-size:45px;" class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">${post.judul}</h1>`)
    })
    
  })

  const judulbab1 = document.querySelector('#judulbab1')
  fetch("buku.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      judulbab1.insertAdjacentHTML('beforeend', `<h1 style="font-size:40px;" class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">${post.judulbab1}</h1>`)
    })
    
  })

  const judulbab2 = document.querySelector('#judulbab2')
  fetch("buku.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      judulbab2.insertAdjacentHTML('beforeend', `<h1 style="font-size:40px;" class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">${post.judulbab2}</h1>`)
    })
    
  })

  const latarBelakang = document.querySelector('#latar-belakang')
  fetch("buku.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
        latarBelakang.insertAdjacentHTML('beforeend', `<svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
        <path
            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
    </svg>
    <p style="text-align: justify;" class="mt-2 text-base text-gray-600">${post.latar_belakang}</p>`)
    })
    
  })

  const instalasi = document.querySelector('#instalasi')
  fetch("buku.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      instalasi.insertAdjacentHTML('beforeend', `<svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
        <path
            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
    </svg>
    <p style="text-align: justify;" class="mt-2 text-base text-gray-600">${post.instalasi}</p>`)
    })
    
  })

  const tujuan_intruksional = document.querySelector('#tujuan-intruksional')
  fetch("buku.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      tujuan_intruksional.insertAdjacentHTML('beforeend', `<svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
        <path
            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
    </svg>
    <p style="text-align: justify;" class="mt-2 text-base text-gray-600">${post.tujuan_intruksional}</p>`)
    })
    
  })

  const capaian_pembelajaran = document.querySelector('#capaian-pembelajaran')
  fetch("buku.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      capaian_pembelajaran.insertAdjacentHTML('beforeend', `<svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
        <path
            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
    </svg>
    <p style="text-align: justify;" class="mt-2 text-base text-gray-600">${post.capaian_pembelajaran}</p>`)
    })
    
  })