const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
// Requerimos la dependencia para crear mis servcie workers
const WorkbokWebpackPlugin = require('workbox-webpack-plugin')
module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      shortname: 'Petgram 🐶',
      description: 'Con Petgram puedes encontrar las mejores fotos de mascotas muy fácilmente',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    // Usamos aqui mi workox plugin, usando en contreto el GenerateSW para generar un service worker en nuestra aplicación,
    new WorkbokWebpackPlugin.GenerateSW({
      // Lo que tiene que cachear se lo vamos a pasar a esta propiedad en un array de objetos
      runtimeCaching: [
        {
          // Le indicamos el patron de la url, pasandole una expresión regular, diciendole que lo que tiene que cachear va a estar en esa ruta, esa url es desde donde estamos cargando las imágenes, pero lo es la única, ya que tambien unsplash también usamos imagenes
          urlPattern: new RegExp('https://(res.cloudinary.com | images.unsplash.com)'),
          // Le decimos la estrategia que debería seguir, por ejemplo, como handler primero mirará si el regurso anterior está en la caché antes de mirar en la red (CacheFirst)
          handler: 'CacheFirst',
          // En las opciones le indicamos el nombre de la caché, que va a ser iamges
          options: {
            cacheName: 'images'
          }
        },
        // Añadimos una nueva caché para la API
        {
          // El patron donde tengo mi servidor lo indico aqui (mi API)
          urlPattern: new RegExp('https://https://petgram-server-stevecode.now.sh/'),
          // La estrategia aqui cambia, ya que queremos siempre tener los datos frescos, así que mirará primero la network
          handler: 'NetworkFirst',
          options: {
            // El nombre de la caché será api
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
