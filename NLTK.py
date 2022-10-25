import string
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
# from nltk.book import *
from nltk import FreqDist
import matplotlib
matplotlib.use('TkAgg')

# https://realpython.com/nltk-nlp-python/#getting-started-with-pythons-nltk

# Download package
# nltk.download('punkt')
# nltk.download("stopwords")
# nltk.download('averaged_perceptron_tagger')
# nltk.download('tagsets')
# nltk.download('wordnet')
# nltk.download('omw-1.4')
# nltk.download("book")

example_string = """Przykładowe zdania w języku polskim. Dokumenty testowy dla analizy NLTK. Co tu się dzieje?"""
words = nltk.word_tokenize(example_string)
stop_words = set(stopwords.words("polish"))
important_words = [word for word in words if word.casefold() not in stop_words]
important_words = [word for word in important_words if word.casefold() not in string.punctuation]
lemmatizer = WordNetLemmatizer()
important_words = [lemmatizer.lemmatize(word) for word in important_words]

print(important_words)

# print(sent_tokenize(example_string)[2])
# lemmatizer = WordNetLemmatizer()
# stop_words = set(stopwords.words("english"))
# for word in word_tokenize(example_string):
#     if word.casefold() not in stop_words:
#         print(lemmatizer.lemmatize(word))

# Stem
# stemmer = PorterStemmer()
# stemmed_words = [stemmer.stem(word) for word in word_tokenize(example_string)]
# print(stemmed_words)

# Get pos of word
# print(nltk.pos_tag(word_tokenize(example_string)))
# print(nltk.help.upenn_tagset())

# Lematizing
# lemmatizer = WordNetLemmatizer()
# print(lemmatizer.lemmatize("worst", pos='a'))

# Chunking
# pos_tags = nltk.pos_tag(word_tokenize(example_string))
# grammar = "NP: {<DT>?<JJ>*<NN>}"
# chunk_parser = nltk.RegexpParser(grammar)
# tree = chunk_parser.parse(pos_tags)
# tree.draw()

# Concordance

# print(text8.concordance("woman"))
# text8.dispersion_plot(["woman", "lady", "girl", "gal", "man", "gentleman", "boy", "guy"])

# stop_words = set(stopwords.words("english"))
# important_words = [word for word in text5 if word.casefold() not in stop_words]
# important_words = [word for word in important_words if word.casefold() not in string.punctuation]
# frequency_distribution = FreqDist(important_words)
# print(frequency_distribution.most_common(20))

# lemmatizer = WordNetLemmatizer()
# lemmatized_words = [lemmatizer.lemmatize(word) for word in text5]
# new_text = nltk.Text(lemmatized_words)
# print(new_text.collocations())

# messenger - analyze words