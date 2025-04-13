/**
 * Format a date string to a more readable format
 * @param {string} dateString - The date string to format (e.g., "2023-10-15")
 * @returns {string} Formatted date (e.g., "Oct 15, 2023")
 */
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };
  
  /**
   * Add thousands separators to a number
   * @param {number} number - The number to format
   * @returns {string} Formatted number with commas
   */
  export const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  
  /**
   * Truncate text if it exceeds a certain length
   * @param {string} text - The text to truncate
   * @param {number} length - Maximum length before truncation
   * @returns {string} Truncated text with ellipsis if needed
   */
  export const truncateText = (text, length = 100) => {
    if (!text) return '';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };
  
  /**
   * Get a color for Codeforces rating
   * @param {number} rating - The Codeforces rating
   * @returns {string} The color corresponding to the rating
   */
  export const getCodeforcesColor = (rating) => {
    if (rating >= 3000) return '#000000'; // Legendary Grandmaster
    if (rating >= 2600) return '#FF0000'; // International Grandmaster
    if (rating >= 2400) return '#FF0000'; // Grandmaster
    if (rating >= 2300) return '#FF8C00'; // International Master
    if (rating >= 2100) return '#FF8C00'; // Master
    if (rating >= 1900) return '#AA00AA'; // Candidate Master
    if (rating >= 1600) return '#0000FF'; // Expert
    if (rating >= 1400) return '#03A89E'; // Specialist
    if (rating >= 1200) return '#008000'; // Pupil
    return '#808080'; // Newbie
  };
  
  /**
   * Get a color for CodeChef rating
   * @param {number} rating - The CodeChef rating
   * @returns {string} The color corresponding to the rating
   */
  export const getCodeChefColor = (rating) => {
    if (rating >= 2500) return '#FFC100'; // 7 star
    if (rating >= 2200) return '#FFC100'; // 6 star
    if (rating >= 2000) return '#FFBF00'; // 5 star
    if (rating >= 1800) return '#62A7A5'; // 4 star
    if (rating >= 1600) return '#684273'; // 3 star
    if (rating >= 1400) return '#5E2A41'; // 2 star
    return '#6A6A6A'; // 1 star
  };
  
  /**
   * Get the rank name for a Codeforces rating
   * @param {number} rating - The Codeforces rating
   * @returns {string} The rank name
   */
  export const getCodeforcesRank = (rating) => {
    if (rating >= 3000) return 'Legendary Grandmaster';
    if (rating >= 2600) return 'International Grandmaster';
    if (rating >= 2400) return 'Grandmaster';
    if (rating >= 2300) return 'International Master';
    if (rating >= 2100) return 'Master';
    if (rating >= 1900) return 'Candidate Master';
    if (rating >= 1600) return 'Expert';
    if (rating >= 1400) return 'Specialist';
    if (rating >= 1200) return 'Pupil';
    return 'Newbie';
  };
  
  /**
   * Get the rank name for a CodeChef rating
   * @param {number} rating - The CodeChef rating
   * @returns {string} The rank name
   */
  export const getCodeChefRank = (rating) => {
    if (rating >= 2500) return '7★';
    if (rating >= 2200) return '6★';
    if (rating >= 2000) return '5★';
    if (rating >= 1800) return '4★';
    if (rating >= 1600) return '3★';
    if (rating >= 1400) return '2★';
    return '1★';
  };
  
  /**
   * Generate a gradient color based on percentage
   * @param {number} percentage - Percentage value (0-100)
   * @returns {string} CSS gradient style string
   */
  export const getGradientByPercentage = (percentage) => {
    return `linear-gradient(90deg, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.8) ${percentage}%, rgba(229, 231, 235, 0.5) ${percentage}%, rgba(229, 231, 235, 0.5) 100%)`;
  };
  
  /**
   * Determine if a URL is external
   * @param {string} url - The URL to check
   * @returns {boolean} True if the URL is external
   */
  export const isExternalLink = (url) => {
    return url && (url.startsWith('http://') || url.startsWith('https://'));
  };
  
  /**
   * Format the duration string to display
   * @param {string} duration - Duration string (e.g., "2021 - 2025")
   * @returns {string} Formatted duration
   */
  export const formatDuration = (duration) => {
    if (!duration) return '';
    
    const parts = duration.split(' - ');
    if (parts.length === 1) return duration;
    
    const start = parts[0];
    const end = parts[1] || 'Present';
    
    return `${start} - ${end}`;
  };
  
  export default {
    formatDate,
    formatNumber,
    truncateText,
    getCodeforcesColor,
    getCodeChefColor,
    getCodeforcesRank,
    getCodeChefRank,
    getGradientByPercentage,
    isExternalLink,
    formatDuration
  };