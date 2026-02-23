# Component Styles

Tailwind class patterns for core components, adapted by aesthetic classification.

## Buttons

```typescript
// Primary CTA
const buttonPrimary = {
  corporate:  'bg-primary text-primary-foreground hover:bg-primary-600 rounded-md px-6 py-3 font-semibold shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  startup:    'bg-primary text-primary-foreground hover:bg-primary-600 rounded-lg px-7 py-3.5 font-bold shadow-md hover:shadow-lg active:scale-[0.97] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring',
  creative:   'bg-primary text-primary-foreground hover:bg-primary-600 rounded-xl px-8 py-4 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring',
  saas:       'bg-primary text-primary-foreground hover:bg-primary-600 rounded-md px-5 py-2.5 font-medium shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-ring',
  premium:    'bg-primary text-primary-foreground hover:bg-primary-600 rounded-sm px-8 py-3 font-medium tracking-wide uppercase text-sm shadow-none hover:shadow-sm transition-all duration-300 focus-visible:ring-1 focus-visible:ring-ring',
  wellness:   'bg-primary text-primary-foreground hover:bg-primary-600 rounded-full px-8 py-3.5 font-semibold shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring',
};

// Secondary
const buttonSecondary = {
  corporate:  'bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md px-6 py-3 font-medium border border-border transition-colors duration-200',
  startup:    'bg-white/10 text-foreground hover:bg-white/20 rounded-lg px-7 py-3.5 font-semibold border border-border/50 backdrop-blur-sm transition-all duration-200',
  creative:   'bg-transparent text-foreground hover:bg-accent/10 rounded-xl px-8 py-4 font-bold border-2 border-foreground hover:border-primary transition-all duration-300',
  saas:       'bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md px-5 py-2.5 font-medium border border-border transition-colors duration-150',
  premium:    'bg-transparent text-foreground hover:text-primary rounded-sm px-8 py-3 font-medium tracking-wide uppercase text-sm border border-border hover:border-primary transition-all duration-300',
  wellness:   'bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full px-8 py-3.5 font-semibold transition-colors duration-200',
};

// Ghost
const buttonGhost = {
  all: 'hover:bg-accent hover:text-accent-foreground rounded-md px-4 py-2 font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring',
};
```

## Cards

```typescript
const card = {
  corporate:  'bg-card text-card-foreground rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-200',
  startup:    'bg-card text-card-foreground rounded-xl p-8 border border-border/50 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
  creative:   'bg-card text-card-foreground rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300',
  saas:       'bg-card text-card-foreground rounded-lg p-6 border border-border shadow-xs hover:shadow-sm transition-shadow duration-200',
  premium:    'bg-card text-card-foreground rounded-md p-10 border border-border/30 shadow-none hover:border-border transition-colors duration-300',
  wellness:   'bg-card text-card-foreground rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200',
};

// Glass variant (for dark backgrounds)
const cardGlass = {
  all: 'bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 hover:bg-white/8 hover:border-white/15 transition-all duration-300',
};

// Interactive feature card
const cardFeature = {
  startup:  'group bg-card text-card-foreground rounded-xl p-8 border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-primary transition-all duration-300',
  premium:  'group bg-card text-card-foreground rounded-md p-10 border border-border/20 hover:border-border/60 transition-all duration-500',
};
```

## Inputs

```typescript
const input = {
  default: 'w-full px-4 py-3 rounded-[var(--radius-md)] bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200',
  premium: 'w-full px-4 py-3 rounded-[var(--radius-sm)] bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-300',
};

const label = 'block text-sm font-medium text-foreground mb-2';
const helperText = 'text-xs text-muted-foreground mt-1.5';
const errorText = 'text-xs text-destructive mt-1.5';
```

## Section Backgrounds

```typescript
const sectionBg = {
  light:   'bg-background text-foreground',
  muted:   'bg-muted/30 text-foreground',
  dark:    'bg-background-dark text-foreground-light',
  accent:  'bg-primary/5 text-foreground',
  gradient:'bg-gradient-to-b from-background to-muted/30 text-foreground',
};
```

## Navigation

```typescript
const nav = {
  default: 'fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 transition-all duration-300',
  transparent: 'fixed top-0 left-0 right-0 z-50 bg-transparent hover:bg-background/80 backdrop-blur-none hover:backdrop-blur-lg transition-all duration-300',
};

const navLink = {
  default: 'text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200',
  active:  'text-sm font-medium text-foreground',
};
```

## Badges / Pills

```typescript
const badge = {
  default:   'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary',
  outline:   'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-border text-muted-foreground',
  premium:   'inline-flex items-center px-4 py-1.5 rounded-sm text-xs font-medium tracking-widest uppercase bg-primary/10 text-primary',
};
```

## Universal Rules

1. **Every interactive element needs**: `hover:`, `focus-visible:`, `active:` states
2. **Touch targets**: All clickable elements `min-h-[44px]` (WCAG)
3. **Focus visible**: Use `focus-visible:ring-2 focus-visible:ring-ring` for keyboard navigation
4. **Transitions**: Always specify `duration-*` and `transition-*` — no implicit browser transitions
5. **Colors via tokens only**: `bg-primary`, never `bg-blue-500`
