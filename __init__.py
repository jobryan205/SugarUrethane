from flask import *


app = Flask(__name__, template_folder='templates')

# initialize url_prefix
# initialize url_prefix
prefix = '//SugarUrethane'
app.config['URL_PREFIX'] = prefix