// @GENERATOR:play-routes-compiler
// @SOURCE:C:/Users/User/Documents/aidbnb/conf/routes
// @DATE:Sun Mar 04 21:26:27 IST 2018


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
