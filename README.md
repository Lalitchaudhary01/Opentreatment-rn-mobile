# OpenTreatment Mobile App

React Native mobile app for a healthcare platform with role-based flows for:

- Auth / onboarding
- Doctor
- Pharmacy
- User
- Admin

The project is written in TypeScript and currently uses React Native CLI with React Navigation.

## Tech Stack

- React Native `0.84.0`
- React `19.2.3`
- TypeScript
- React Navigation
- `react-native-gesture-handler`
- `react-native-reanimated`
- `react-native-screens`
- `lucide-react-native`

## Requirements

Make sure your local environment is ready before running the app:

- Node.js `>= 22.11.0`
- npm
- Android Studio with SDK and emulator
- Xcode + CocoaPods for iOS

Follow the official React Native environment setup if needed:

- [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment)

## Installation

From the project root:

```bash
npm install
```

## Run The App

### 1. Start Metro

```bash
npm start
```

### 2. Run Android

```bash
npm run android
```

### 3. Run iOS

Install pods first if required:

```bash
cd ios
pod install
cd ..
```

Then run:

```bash
npm run ios
```

## Useful Commands

```bash
npm start
npm run android
npm run ios
npm run lint
npm test
npx tsc --noEmit
```

## Project Structure

Current source layout:

```text
src/
  app/
    App.tsx
    navigation/
    providers/

  config/
  core/
    api/
    hooks/
    storage/
    types/
    utils/

  modules/
    auth/
    doctor/
    pharmacy/
    user/
    admin/

  shared/
    components/
    theme/
    ui/
    i18n/

  components/
  navigation/
  theme/
```

## Structure Notes

This project is currently in a transition state between a root-based structure and a modular structure.

- `src/app` is now the app entry layer
- `src/modules/*` contains feature modules
- `src/shared/*` is intended for reusable shared code
- `src/components`, `src/navigation`, and `src/theme` still contain the currently used implementation
- `src/app/navigation/*` and `src/app/providers/*` include bridge files so the app can move gradually toward the new structure

This means the app works with the new folder layout, but some placeholder files still exist and are not implemented yet.

## Main Entry Flow

App startup currently flows like this:

```text
App.tsx
  -> src/app/App.tsx
  -> src/app/providers/ThemeProvider.tsx
  -> src/app/navigation/RootNavigator.tsx
  -> src/navigation/RootNavigator.tsx
```

## Feature Modules

### Auth

Contains the onboarding flow:

- Register
- OTP verification
- Professional details
- Clinic details

### Doctor

Currently contains the most active screens, including:

- Dashboard
- Appointments
- Patients
- Billing
- Revenue
- Analytics
- Services
- Availability
- Reviews
- Profile
- Settings

### Pharmacy / User / Admin

Folders are scaffolded and ready, but several files are still placeholders.

## Styling

The project currently uses standard React Native styling:

- `StyleSheet.create(...)`
- inline dynamic theme-based styles where needed

No Tailwind / NativeWind setup is active in the current codebase.

## Theme

Theme logic currently lives in:

- [`src/theme/theme.ts`](./src/theme/theme.ts)
- [`src/theme/ThemeProvider.tsx`](./src/theme/ThemeProvider.tsx)

It supports light/dark mode values and exposes:

- `colors`
- `mode`
- `isDark`
- `toggleTheme()`

## Navigation

Main navigation currently lives in:

- [`src/navigation/RootNavigator.tsx`](./src/navigation/RootNavigator.tsx)
- [`src/navigation/MainNavigator.tsx`](./src/navigation/MainNavigator.tsx)
- [`src/navigation/MainTabNavigator.tsx`](./src/navigation/MainTabNavigator.tsx)

The doctor experience is driven by:

- stack navigation for onboarding
- drawer navigation for the main shell
- bottom tabs inside the drawer

## Development Guidelines

Recommended direction for future cleanup:

- keep app bootstrapping inside `src/app`
- move reusable code toward `src/shared`
- keep business/domain code inside `src/modules`
- gradually reduce direct usage of root `src/components`, `src/navigation`, and `src/theme`

## Known State

Current status of the repo:

- TypeScript typecheck is passing
- app folder structure is aligned enough to continue development
- several scaffolded files still contain only `export {}`
- pharmacy, user, admin, and parts of shared/core still need real implementation

## Troubleshooting

### Metro cache issues

If Metro behaves unexpectedly:

```bash
npm start -- --reset-cache
```

### Android build issues

Try a clean build:

```bash
cd android
./gradlew clean
cd ..
npm run android
```

### Type check

```bash
npx tsc --noEmit
```

## Next Suggested Cleanup

If you continue building this app, the next good steps are:

1. Move active shared UI from `src/components` into `src/shared/components`
2. Move theme files from `src/theme` into `src/shared/theme`
3. Replace placeholder files in `modules/pharmacy`, `modules/user`, and `modules/admin`
4. Add real API and store implementations under `src/core` and `src/modules/*`

## License

This project is private and intended for internal development unless stated otherwise.
