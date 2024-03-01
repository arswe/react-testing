import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

describe('ProductImageGallery', () => {
  it('should render nothing if given an empty array', () => {
    
    const { container } = render(<ProductImageGallery imageUrls={[]} />)

    expect(container).toBeEmptyDOMElement()
  })

  it('should render a list of image', () => {
    const imageUrls = ['ulr1', 'url2']
    render(<ProductImageGallery imageUrls={imageUrls} />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(imageUrls.length)

    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute('src', url)
    })
  })
})
