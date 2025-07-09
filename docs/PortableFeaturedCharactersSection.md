# Portable Featured Characters Section

This is a portable duplicate of the home page featured characters section with unique classnames and a dedicated stylesheet. This component can be used anywhere in the application without conflicts with the original featured characters section.

## Files Created

1. **`components/PortableFeaturedCharactersSection.tsx`** - Main component
2. **`components/PortableCharacterCard.tsx`** - Individual character card component
3. **`styles/PortableFeaturedCharactersSection.css`** - Dedicated stylesheet with unique classnames
4. **`app/portable-demo/page.tsx`** - Demo page showing usage

## Unique Classnames

All classnames are prefixed with `portable-` to avoid conflicts:

- `portable-featured-characters-section`
- `portable-featured-characters-cards-container`
- `portable-featured-character-card`
- `portable-image-container`
- `portable-content`
- `portable-featured-character-card-header`
- `portable-featured-character-card-description`

## Usage

```tsx
import PortableFeaturedCharactersSection from '@/components/PortableFeaturedCharactersSection';

export default function MyPage() {
  return (
    <div>
      <PortableFeaturedCharactersSection />
    </div>
  );
}
```

## Features

- **Portable**: Can be used anywhere without CSS conflicts
- **Responsive**: Includes mobile and tablet responsive styles
- **Interactive**: Hover effects and animations
- **Accessible**: Proper semantic HTML structure
- **Customizable**: Easy to modify characters array and styling

## Customization

### Changing Characters

Edit the `characters` array in `PortableFeaturedCharactersSection.tsx`:

```tsx
const characters = [
  {
    name: "Your Character",
    description: "Character description",
    image: "/path/to/image.png",
    link: "/characters/your-character"
  },
  // Add more characters...
];
```

### Styling

Modify `styles/PortableFeaturedCharactersSection.css` to customize:

- Colors and themes
- Card dimensions
- Animations and transitions
- Responsive breakpoints

## Demo

Visit `/portable-demo` to see the component in action.

## Benefits

1. **No Conflicts**: Unique classnames prevent CSS conflicts
2. **Reusable**: Can be used in multiple places
3. **Maintainable**: Separate stylesheet for easy updates
4. **Scalable**: Easy to create variations for different use cases 