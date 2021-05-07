<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:template name="general-wrapper">
		<ul>
			<li>
				<span>Kind</span>
				<span class="value-kind">
					<xsl:value-of select="@kind"/>
					<xsl:value-of select="//Mime/*[@id=current()/@kind]/@name"/>
					<xsl:if test="substring( @mode, 1, 1 ) != 'd'"> file</xsl:if>
				</span>
			</li>
			<li>
				<span>Size</span>
				<span class="value-size">
					<xsl:call-template name="sys:file-size">
						<xsl:with-param name="bytes" select="@size" />
						<xsl:with-param name="kind" select="@kind" />
					</xsl:call-template>
				</span>
			</li>
			<xsl:if test="@kind = '_dir'">
				<li>
					<span>Content</span>
					<span class="value-content">
						<xsl:choose>
							<xsl:when test="count(.//*) = 0">Empty</xsl:when>
							<xsl:otherwise>
								<xsl:value-of select="count(.//*)"/> items
							</xsl:otherwise>
						</xsl:choose>
					</span>
				</li>
			</xsl:if>
			<li>
				<span>Where</span>
				<span class="value-path">~/Desktop/mp3/song.mp3</span>
			</li>
			<li>
				<span>Modified</span>
				<span class="value-lastModified"><xsl:call-template name="sys:fileModified"/></span>
			</li>
			<li class="divider"></li>
			
			<xsl:if test="@kind = 'app'">
				<xsl:variable name="app" select="/ledger/Settings/Apps/*[@id='calculator']"/>

				<li>
					<span>Author</span>
					<span class="value-author"><xsl:value-of select="$app/@author"/></span>
				</li>
				<li>
					<span>Version</span>
					<span class="value-version"><xsl:value-of select="$app/@version"/></span>
				</li>
			</xsl:if>

			<xsl:if test="@kind != 'app'">
				<li>
					<span>Owner</span>
					<span class="value-owner"><xsl:value-of select="/ledger/Settings/User/@name"/></span>
				</li>
			</xsl:if>
		</ul>
	</xsl:template>

</xsl:stylesheet>