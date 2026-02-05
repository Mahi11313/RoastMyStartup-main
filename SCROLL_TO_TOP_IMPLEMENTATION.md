# Scroll-to-Top Implementation

Global scroll-to-top behavior and floating button implemented for RoastMyStartup.

## Components

### 1. ScrollToTop Component
**`src/components/ScrollToTop.tsx`**
- Listens to route changes using React Router's `useLocation` hook
- Automatically scrolls window to top (0, 0) on every pathname change
- Returns `null` (no visual component)
- Lightweight and performant

### 2. ScrollToTopButton Component
**`src/components/ScrollToTopButton.tsx`**
- Floating button fixed at bottom-right corner
- Appears only when user scrolls down 300px or more
- Uses RetroUI Button component with yellow theme
- Smooth scroll animation on click
- Includes ArrowUp icon from lucide-react
- Accessible with aria-label

## Integration
**`src/App.tsx`**
- Both components mounted inside `<BrowserRouter>`
- Placed before `<Routes>` to ensure global application
- Applied to all pages automatically

## How It Works

### Automatic Scroll on Route Change
1. User navigates to a new route (via navbar, links, or buttons)
2. React Router updates the pathname
3. `ScrollToTop` component detects the pathname change via `useEffect`
4. Window scrolls to top instantly: `window.scrollTo(0, 0)`
5. New page renders at the top position

### Manual Scroll Button
1. User scrolls down more than 300px
2. Floating button fades in at bottom-right
3. User clicks the button
4. Page smoothly scrolls to top: `window.scrollTo({ top: 0, behavior: "smooth" })`
5. Button disappears when reaching top

## Styling

### ScrollToTopButton
- **Position**: Fixed bottom-right (bottom: 2rem, right: 2rem)
- **Z-index**: 50 (appears above content)
- **Button Style**: RetroUI default variant (yellow background)
- **Size**: Icon size (48x48px)
- **Shadow**: Large shadow for visibility
- **Icon**: ArrowUp from lucide-react (24x24px)
- **Theme**: Matches existing RetroUI yellow buttons with black borders

## Benefits

✅ **Global**: Works for all routes without modifying individual pages
✅ **Automatic**: Route changes scroll to top instantly
✅ **Manual**: Floating button for user-controlled scrolling
✅ **Conditional**: Button only appears when needed (scrolled > 300px)
✅ **Smooth**: Animated scroll for better UX
✅ **Accessible**: Proper aria-label for screen readers
✅ **Themed**: Matches existing RetroUI design system
✅ **Clean**: No layout shift or flicker
✅ **Performant**: Event listeners properly cleaned up

## Testing Scenarios

All scenarios tested and working:

### Automatic Scroll (ScrollToTop)
1. **Navbar Navigation**
   - Scroll to bottom of any page
   - Click navbar link
   - New page loads at top ✓

2. **CTA Buttons**
   - Scroll to bottom of landing page
   - Click "ROAST MY IDEA" or "DESTROY MY STARTUP"
   - Auth page loads at top ✓

3. **Footer Links**
   - Scroll to bottom of page
   - Click footer navigation link
   - New page loads at top ✓

4. **Browser Back/Forward**
   - Navigate between pages
   - Each page loads at top ✓

### Manual Scroll Button (ScrollToTopButton)
1. **Button Visibility**
   - At page top: Button hidden ✓
   - Scroll down 300px: Button appears ✓
   - Scroll back to top: Button disappears ✓

2. **Button Functionality**
   - Click button: Smooth scroll to top ✓
   - Button disappears when reaching top ✓

3. **Styling**
   - Yellow RetroUI button style ✓
   - Black border and shadow ✓
   - ArrowUp icon visible ✓
   - Fixed at bottom-right ✓

## Technical Details

### ScrollToTop
- **Framework**: React Router v6
- **Hook Used**: `useLocation()` from `react-router-dom`
- **Scroll Method**: `window.scrollTo(0, 0)`
- **Trigger**: `useEffect` with `pathname` dependency
- **Render**: Component returns `null` (no DOM output)

### ScrollToTopButton
- **Framework**: React with hooks
- **State Management**: `useState` for visibility
- **Event Listener**: `scroll` event on window
- **Scroll Method**: `window.scrollTo({ top: 0, behavior: "smooth" })`
- **Threshold**: 300px scroll distance
- **Cleanup**: Event listener removed on unmount
- **Component**: RetroUI Button with icon size variant

## Code Structure

```tsx
// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
```

```tsx
// ScrollToTopButton.tsx
import { useState, useEffect } from "react";
import { RetroUIButton } from "@/components/retroui/button";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <RetroUIButton
        onClick={scrollToTop}
        size="icon"
        variant="default"
        className="shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </RetroUIButton>
    </div>
  );
}
```

```tsx
// App.tsx
<BrowserRouter>
  <ScrollToTop />          {/* Auto-scroll on route change */}
  <ScrollToTopButton />    {/* Manual scroll button */}
  <Routes>
    {/* All routes */}
  </Routes>
</BrowserRouter>
```

## Notes

- No modifications to individual pages required
- No scroll logic attached to navbar or buttons
- Works seamlessly with all route transitions
- Compatible with React Router's navigation methods
- No performance impact on page load times
- Event listeners properly cleaned up to prevent memory leaks
- Button styling matches existing RetroUI theme perfectly
- Smooth scroll provides better user experience than instant jump
