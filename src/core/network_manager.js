const downloadFile = require("download-file");
const got          = require("got");

class NetworkManager
{
	// REST Api ----------------------------------------------------------------
	
	/**
	 * REST Api GET request
	 * @param  {String}           url
	 * @param  {Json Object|Null} data
	 * @param  {Json Object|Null} options
	 * @param  {Function}         callback
	 * @return {Undefined}
	 */
	static get(url, data, options, callback) {
		this.request(url, "GET", data, options, callback);
	}

	/**
	 * REST Api POST request
	 * @param  {String}           url
	 * @param  {Json Object|Null} data
	 * @param  {Json Object|Null} options
	 * @param  {Function}         callback
	 * @return {Undefined}
	 */
	static post(url, data, options, callback) {
		this.request(url, "POST", data, options, callback);
	}

	/**
	 * REST Api PUT request
	 * @param  {String}           url
	 * @param  {Json Object|Null} data
	 * @param  {Json Object|Null} options
	 * @param  {Function}         callback
	 * @return {Undefined}
	 */
	static put(url, data, options, callback) {
		this.request(url, "PUT", data, options, callback);
	}

	/**
	 * REST Api PATCH request
	 * @param  {String}           url
	 * @param  {Json Object|Null} data
	 * @param  {Json Object|Null} options
	 * @param  {Function}         callback
	 * @return {Undefined}
	 */
	static patch(url, data, options, callback) {
		this.request(url, "PATCH", data, options, callback);
	}

	/**
	 * REST Api DELETE request
	 * @param  {String}           url
	 * @param  {Json Object|Null} data
	 * @param  {Json Object|Null} options
	 * @param  {Function}         callback
	 * @return {Undefined}
	 */
	static delete(url, data, options, callback) {
		this.request(url, "DELETE", data, options, callback);
	}

	// Other Network Utilities -------------------------------------------------

	/**
	 * REST Api GET request
	 * @param  {String}           url
	 * @param  {Json Object|Null} data
	 * @param  {Json Object|Null} options
	 * @param  {Function}         callback
	 * @return {Undefined}
	 */
	static download(url, options, callback) {
		downloadFile(url, options, callback);
	}

	// Raw Methods -------------------------------------------------------------

	/**
	 * Make an HTTP/HTTPS request
	 * @param  {String}           url
	 * @param  {String}           method
	 * @param  {Json Object|Null} data
	 * @param  {Json Object|Null} options
	 * @param  {Function}         callback
	 * @return {Undefined}
	 */
	static request(url, method, data, options, callback) {
		options        = options || {}
		options.method = method;
		options.body   = data;
		got(url, options)
		    .then(response => { callback(null, response); })
		    .catch(err     => { callback(err,  response); });
	}
}

// Export the module
module.exports = {NetworkManager};
