# React Cocktails

A simple React application that displays a list of cocktails and allows users to search for specific cocktails by name.

## Screenshots

| Home Page | Search Results | Cocktail Details | Error Page | About Page |
| :---: | :---: | :---: | :---: | :---: |
| ![Home Page](public/screens/home-page.png) | ![Search Results](public/screens/search-page.png) | ![Cocktail Details](public/screens/product-detail-page.png) | ![Error Page](public/screens/error-page.png) | ![About Page](public/screens/about-page.png)

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **React Router:** For handling client-side routing.
- **Axios:** For making API requests.
- **CSS Modules / Styled Components:** For component-level styling.
- **TheCocktailDB API:** Source for cocktail data.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aadhar41/react-cocktails.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-cocktails
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:
```bash
npm start
```
The application will be available at `http://localhost:3000`.

## Deployment Fixes

### React Router Fix
If you encounter a "Page Not Found" error on Netlify when using React Router, refer to the following guide:
[Netlify React Router Fix](https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc)

### CRA Build Fix
To ensure the build process completes successfully in CI environments, update your `package.json` build script:

```json
"build": "CI= react-scripts build",
```

## Contributing

Contributions are welcome! Please submit a pull request for any improvements or bug fixes.

## Version

1.0.0

## Author

[Aadhar41](https://github.com/aadhar41)

## Contact

For any inquiries or support, please contact [your-email@example.com](mailto:your-email@example.com).

## Acknowledgments

- **TheCocktailDB:** For providing the comprehensive API for cocktail data.
- The React and Open Source community for the amazing tools and documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
