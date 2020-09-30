import { Article } from '.'
import { User } from '../user'

let user, article

beforeEach(async () => {
  user = await User.create({ email: 'a@a.com', password: '123456' })
  article = await Article.create({ user, title: 'test', content: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = article.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(article.id)
    expect(typeof view.user).toBe('object')
    expect(view.user.id).toBe(user.id)
    expect(view.title).toBe(article.title)
    expect(view.content).toBe(article.content)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = article.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(article.id)
    expect(typeof view.user).toBe('object')
    expect(view.user.id).toBe(user.id)
    expect(view.title).toBe(article.title)
    expect(view.content).toBe(article.content)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
