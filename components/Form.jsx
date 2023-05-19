import Link from 'next/link'

const Form = ({ 
  type,
  post,
  setPost,
  submitting,
  handleSubmit
}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className="head_text text-left"><span className="blue_gradient">{type} Post</span></h1>
      <p className="desc text-left max-w-md">{type} & share amazing prompt with the world, and let your imagination run wild with any AI-powered platform</p>
      <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorfism" onSubmit={handleSubmit}>
        <label htmlFor='prompt'><span className="font-satoshi font-semibold text-bold text-gray-700">Your AI prompt</span>
        <textarea
          type='text'
          name='prompt'
          id='prompt'
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          placeholder='Enter your prompt here...'
          required
          className="w-full h-40 p-5 rounded-sm bg-gray-100 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </label>
        <label htmlFor='tag'><span className="font-satoshi font-semibold text-bold text-gray-700">"Tag{" "}<span>(#idea #research #development)</span></span>
        <input
          type='text'
          name='tag'
          id='tag'
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
          placeholder='#tag'
          required
          className="w-full p-2 rounded-sm bg-gray-100 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white "
          >
            {submitting ? `${type}...` : type }
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form