export default async ($content, params, error) => {
  const currentPage = parseInt(params.page)

  const perPage = 3

  const allArticles = await $content('articles').fetch()

  const totalArticles = allArticles.length

  // use Math.ceil to round up to the nearest whole number
  const lastPage = Math.ceil(totalArticles / perPage)

  // use the % (modulus) operator to get a whole remainder
  const lastPageCount = totalArticles % perPage

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0
    }

    return (currentPage - 1) * perPage
  }

  const paginatedArticles = await $content('articles')
    .only(['name', 'description', 'img', 'slug'])
    .sortBy('createdAt', 'asc')
    .limit(perPage)
    .skip(skipNumber())
    .fetch()

  if (currentPage === 0 || !paginatedArticles.length) {
    return error({ statusCode: 404, message: 'No articles found!' })
  }

  return {
    allArticles,
    paginatedArticles
  }
}
